import { ApiError, catchAsyncErrors } from './error.middlewares.js';
import jwt from 'jsonwebtoken';

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const token = req.cookie.token;

    if (!token) {
        throw new ApiError('You are not logged in', 401);
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.id = decoded.id;
        next();
    } catch (error) {
        throw new ApiError('Jwt token error', 401);
    }
});
