export class ApiError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOpernational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

export const catchAsyncErrors = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};

export const handleJwtError = () => {
    new ApiError('Invalid Token. Please log in again', 401);
};
