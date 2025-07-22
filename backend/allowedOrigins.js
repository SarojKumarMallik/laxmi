// Allow requests only from the specified origins
const allowedOrigins = ['https://lakshmimaternity.com/', 'http://localhost:3000','https://www.lakshmimaternity.com/', 'lakshmimaternity.com'];

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

module.exports = corsOptions;