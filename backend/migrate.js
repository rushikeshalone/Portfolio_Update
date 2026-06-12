const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
require('dotenv').config();

async function migrate() {
    // First connect without database to create it
    const conn = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT) || 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        ssl: { rejectUnauthorized: false },
        multipleStatements: true
    });

    const schemaPath = path.join(__dirname, 'db', 'schema.sql');
    const sql = fs.readFileSync(schemaPath, 'utf8');

    console.log('🔧 Running database migration...');
    try {
        await conn.query(sql);
        console.log('✅ Database and tables created successfully!');
        console.log('✅ Seed data inserted!');
    } catch (err) {
        console.error('❌ Migration error:', err.message);
    } finally {
        await conn.end();
    }
}

migrate();
