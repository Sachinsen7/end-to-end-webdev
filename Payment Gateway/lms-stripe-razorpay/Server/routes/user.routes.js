import express from 'express';
const router = express.Router();
import { isAuthenticated } from '../middlewares/auth.middlewares.js';
import {
    createUserAccount,
    authenticateUser,
    getCurrentUserProfile,
    logoutUser,
    updateUserProfile,
} from '../controllers/user.controllers.js';
import upload from '../utils/multer.js';
import { validateSignup } from '../middlewares/validation.middleware.js';

router.post('/signup', validateSignup, createUserAccount);
router.post('/signin', authenticateUser);
router.post('/signout', logoutUser);

// profile
router.post('/profile', isAuthenticated, getCurrentUserProfile);
router.patch(
    '/profile',
    isAuthenticated,
    upload.single('avatar'),
    updateUserProfile
);

export default router;
