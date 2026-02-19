const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
const path = require('path');

// Load .env from the parent directory
dotenv.config({ path: path.join(__dirname, '../.env') });

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false
    }
};

async function initializeDatabase() {
    let connection;
    try {
        console.log('Connecting to database...');
        console.log(`Host: ${dbConfig.host}`);
        connection = await mysql.createConnection(dbConfig);
        console.log('Connected!');

        // Create KodUser Table
        const createKodUserTable = `
            CREATE TABLE IF NOT EXISTS KodUser (
                uid INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(255) UNIQUE NOT NULL,
                email VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL,
                phone VARCHAR(20) NOT NULL,
                role ENUM('customer', 'manager', 'admin') DEFAULT 'customer',
                balance DECIMAL(15, 2) DEFAULT 100000.00,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            );
        `;
        await connection.execute(createKodUserTable);
        console.log('✅ KodUser table created or already exists.');

        // Create UserToken Table
        const createUserTokenTable = `
            CREATE TABLE IF NOT EXISTS UserToken (
                tid INT AUTO_INCREMENT PRIMARY KEY,
                uid INT NOT NULL,
                access_token TEXT,
                refresh_token TEXT NOT NULL,
                expiry DATETIME NOT NULL,
                device_info VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (uid) REFERENCES KodUser(uid) ON DELETE CASCADE
            );
        `;
        await connection.execute(createUserTokenTable);
        console.log('✅ UserToken table created or already exists.');

    } catch (error) {
        console.error('❌ Database Initialization Failed:', error);
    } finally {
        if (connection) {
            await connection.end();
            console.log('Connection closed.');
        }
    }
}

initializeDatabase();
