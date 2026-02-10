const fs = require('fs');
const path = require('path');

// Load .env explicitly
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
    require('dotenv').config({ path: envPath });
} else {
    // Fallback for CI environments where .env might not exist (env vars provided by system)
    require('dotenv').config();
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
