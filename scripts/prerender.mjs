// scripts/prerender.mjs
//
// Runs AFTER `vite build`. Serves the built dist/ folder locally, visits
// every route in a headless browser, waits for React to render, and saves
// the fully-rendered HTML back into dist/<route>/index.html.
//
// This gives crawlers (Googlebot, social previews, etc.) real HTML content
// on first request, while real visitors still get the normal React SPA
// (the JS bundle still loads and takes over as usual — nothing about the
// client-side app changes).

import puppeteer from 'puppeteer';
import sirv from 'sirv';
import { createServer } from 'node:http';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '../dist');
const PORT = 5005;

// Service IDs pulled from src/constants/data.ts
const serviceIds = [
  'film-production',
  'acting-classes',
  'branding-website',
  'organic-content',
  'paid-ads',
  'seo-backlinks',
  'pr-influencers-ugc',
  'email-marketing',
  'ecommerce-marketplace',
  'print-ooh',
  'retention-loyalty-referral-affiliate',
  'events-activations-tradeshows',
];

const routes = [
  '/',
  '/services',
  '/portfolio',
  '/about',
  '/connect',
  ...serviceIds.map((id) => `/services/${id}`),
];

function routeToFilePath(route) {
  if (route === '/') return path.join(DIST_DIR, 'index.html');
  return path.join(DIST_DIR, route, 'index.html');
}

async function startServer() {
  const serve = sirv(DIST_DIR, { single: true, dev: true });
  const server = createServer((req, res) => serve(req, res));
  await new Promise((resolve) => server.listen(PORT, resolve));
  return server;
}

async function main() {
  console.log(`Prerendering ${routes.length} routes...`);

  const server = await startServer();
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const route of routes) {
      const page = await browser.newPage();
      const url = `http://localhost:${PORT}${route}`;

      try {
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

        // Small extra buffer for any post-idle rendering (e.g. Helmet
        // updating <head>, deferred effects, images swapping in).
        await new Promise((resolve) => setTimeout(resolve, 300));

        const html = await page.content();
        const filePath = routeToFilePath(route);

        await mkdir(path.dirname(filePath), { recursive: true });
        await writeFile(filePath, html, 'utf-8');

        console.log(`  ✓ ${route} -> ${path.relative(DIST_DIR, filePath)}`);
      } catch (err) {
        console.error(`  ✗ ${route} failed:`, err.message);
        process.exitCode = 1;
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log('Prerendering complete.');
}

main().catch((err) => {
  console.error('Prerender script crashed:', err);
  process.exit(1);
});