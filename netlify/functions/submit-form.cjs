const { neon } = require('@neondatabase/serverless');

exports.handler = async (event) => {
  // Only allow POST requests (submissions)
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const sql = neon(process.env.NETLIFY_DATABASE_URL);

  try {
    const { name, email, phone, service, message } = JSON.parse(event.body);

    // This matches the CREATE TABLE command you ran in Neon
    await sql`
      INSERT INTO contact_queries (name, email, phone, service, message)
      VALUES (${name}, ${email}, ${phone}, ${service}, ${message})
    `;

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Data saved to Neon!" }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to save data" })
    };
  }
};
