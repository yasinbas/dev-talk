const fs = require('fs');
const path = require('path');

// Load .env explicitly
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
    try {
        require('dotenv').config({ path: envPath });
    } catch {
        console.warn("WARN: .env found but dotenv package not installed. Skipping load.");
    }
}

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
    console.error("ERROR: DATABASE_URL is not defined in environment variables.");
    // We don't throw here to allow 'prisma generate' to run in CI even without DB access
}

module.exports = {
    schema: "prisma/schema.prisma",
    datasource: {
        url: databaseUrl,
    },
};
