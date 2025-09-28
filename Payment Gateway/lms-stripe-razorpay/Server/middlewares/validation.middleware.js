import { body, param, query, validationResult } from 'express-validator';

export const validate = (validations) => {
    return async (req, res, next) => {
        //run all validation

        await Promise.all(validations.map((validation) => validation.run(req)));

        const errors = validationResult(req);

        if (errors.isEmpty()) {
            return next();
        }

        const extractedErrors = errors.array().map((err) => ({
            field: err.path,
            message: err.msg,
        }));

        throw new Error('Validation Error');
    };
};

export const commonValidations = {
    pagination: [
        query('page')
            .optional()
            .isInt({ min: 1 })
            .withMessage('Page must be >= 1'),
        query('limit')
            .optional()
            .isInt({ min: 1 })
            .withMessage('Limit must be >= 1'),
    ],

    email: body('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Invalid email address'),
    name: body('name')
        .trim()
        .isLength({ min: 2, max: 50 })
        .withMessage('Please provide a valid name'),
};

export const validateSignup = validate([
    commonValidations.email,
    commonValidations.name,
]);
