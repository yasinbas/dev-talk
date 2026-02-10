const fs = require('fs');
const path = require('path');

console.log("Current directory:", __dirname);
const envPath = path.join(__dirname, '.env');
console.log("Looking for .env at:", envPath);

if (fs.existsSync(envPath)) {
    console.log(".env file found.");
    const result = require('dotenv').config({ path: envPath });
    if (result.error) {
        console.error("Error loading .env:", result.error);
    } else {
        console.log(".env loaded successfully.");
    }
} else {
    console.log(".env file NOT found. Trying default dotenv load...");
    require('dotenv').config();
}

const dbUrl = process.env.DATABASE_URL;
console.log("DATABASE_URL type:", typeof dbUrl);
console.log("DATABASE_URL value:", dbUrl);

if (!dbUrl) {
    console.error("ERROR: DATABASE_URL is missing!");
} else {
    console.log("SUCCESS: DATABASE_URL is present.");
}
