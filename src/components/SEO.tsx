import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string;
  description: string;
  path: string; // e.g. "/services"
}

const SITE_NAME = "Opal Media";
const BASE_URL = "https://www.opalmediauae.com";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

const BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Opal Media",
  "image": DEFAULT_IMAGE,
  "telephone": "+971554773618",
  "email": "info@opalmediauae.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "url": BASE_URL,
  "sameAs": [
    "https://instagram.com/opalmediauae",
    "https://linkedin.com/company/opalmediauae",
    "https://youtube.com/@opalmediauae"
  ]
};

export default function SEO({ title, description, path }: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;
  const isHomepage = path === '/';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={DEFAULT_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {isHomepage && (
        <script type="application/ld+json">
          {JSON.stringify(BUSINESS_SCHEMA)}
        </script>
      )}
    </Helmet>
  );
}