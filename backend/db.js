const { createPool } = require('mysql2');

// Create a connection pool
const db = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lmsc',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = db;
