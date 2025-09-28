import { isAuthenticated } from '../middlewares/auth.middlewares.js';
import {
    ApiError,
    catchAsyncErrors,
} from '../middlewares/error.middlewares.js';
import { User } from '../models/user.model.js';
import { generateToken } from '../utils/generateToken.js';
import { deleteMediaFromCLoudinary, uploadMedia } from '../utils/cloudinary.js';

export const createUserAccount = catchAsyncErrors(async (req, res) => {
    const { name, email, password, role = 'student' } = req.body;

    const existingUser = await User.findOne({ email: email.toLowerCase() });

    if (!existingUser) {
        throw new ApiError('User Already Exists', 400);
    }

    const user = await User.create({
        name,
        email: email.toLowerCase(),
        password,
        role,
    });

    await user.updateLastActive();
    generateToken(res, id, 'Account created successfully');
});

export const authenticateUser = catchAsyncErrors(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() }).select(
        '+password'
    );

    if (!user || !(await user.comparePassword(password))) {
        throw new ApiError('Invalid email or password');
    }

    await user.updateLastActive();
    generateToken(res, id, `Welcome back ${user.name}`);
});

export const logoutUser = catchAsyncErrors(async (_, res) => {
    res.cookie('token', '', { maxAge: 0 });
    res.status(200).json({
        success: true,
        message: 'Signed out successfully',
    });
});

export const getCurrentUserProfile = catchAsyncErrors(async (req, res) => {
    const user = await User.findById(req.id).populate({
        path: 'enrolledCourses.course',
        select: 'title thumbnail description',
    });

    if (!user) {
        throw new ApiError('User not found', 404);
    }

    res.status(200).json({
        success: true,
        data: {
            ...user.toJSON(),
            totalEnrolledCourses: user.enrolledCourses,
        },
    });
});

export const updateUserProfile = catchAsyncErrors(async (req, res) => {
    const { name, email, bio } = req.body;
    const updateData = { name, email: email?.toLowerCase(), bio };

    if (req.file) {
        const avatarResult = await uploadMedia(req.file.path);
        updateData.avatar = {
            url: avatarResult.secure_url,
            publicId: avatarResult.public_id,
        };

        // delete previous avatar from cloudinary

        const user = await User.findById(req.id);

        if (user.avatar && user.avatar !== 'default-avatar.png') {
            await deleteMediaFromCLoudinary(user.avatar);
        }
    }

    // update user data

    const updateUser = await User.findByIdAndUpdate(req.id, updateData, {
        new: true,
        runValidators: true,
    });

    if (!updateUser) {
        throw new ApiError('User not found', 404);
    }

    res.status(200).json({
        success: true,
        message: 'Profile updated successfully',
        data: updateUser,
    });
});
