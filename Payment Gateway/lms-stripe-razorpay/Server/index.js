import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';
import cookieParser from 'cookie-parser';
import cors from 'cors';
dotenv.config();

const app = express();
// global rate limit

const Limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message:
        'Too many requests from this IP, please try again after 15 minutes',
});

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

//security middlewares
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use('/api', Limiter);

app.get('/', (req, res) => {
    res.send('API is running...');
});

// global error handler

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        status: 'error',
        message: err.message || 'Something went wrong!',
        ...app(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
});

// cors configuration

app.use(
    cors({
        origin: process.env.CLIENT_URL || 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'],
        credentials: true,
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'X-Requested-With',
            'Accept',
            'Origin',
            'Access-Control-Allow-Origin',
            'Access-Control-Allow-Credentials',
            'Set-Cookie',
            'Cookie',
        ],
    })
);

// api routes
import healthcheckRoutes from './routes/healthcheck.routes.js';
import userRoutes from './routes/user.routes.js';

app.use('/api/healthcheck', healthcheckRoutes);
app.use('/api/v1/user', userRoutes);

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use((req, res) => {
    res.status(404).send({ message: 'Route Not Found' });
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
