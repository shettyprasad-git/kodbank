const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const db = require('./config/db');

// Load env vars
dotenv.config();

const app = express();

// Middleware
const allowedOrigins = [
    'http://localhost:5173',
    process.env.FRONTEND_URL // Add your Vercel frontend URL here
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(morgan('dev'));

// Database Connection Check
db.promise().query('SELECT 1')
    .then(() => console.log('MySQL Database Connected'))
    .catch(err => console.error('MySQL Connection Error:', err));

// Routes
app.use('/api', require('./gateway/routes'));

app.get('/', (req, res) => {
    res.send('Kodbank API is running');
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Internal Server Error'
    });
});

const PORT = process.env.PORT || 5000;

// Only listen if not running in Vercel (local development)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    });
}

// Export for Vercel
module.exports = app;
