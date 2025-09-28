import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
    cloudinary_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadMedia = async (file) => {
    try {
        const uploadResponse = await cloudinary.uploader(file, {
            resourse_type: 'auto',
        });
        return uploadResponse;
    } catch (error) {
        console.log('Error in uploading media to cloudinary');
        console.log(error);
    }
};

export const deleteMediaFromCLoudinary = async (publicId) => {
    try {
        await cloudinary.uploader.destroy(publicId);
    } catch (error) {
        console.log('Failed to delete MEDIA from cloudinary');
        console.log(error);
    }
};

export const deleteVideoFromCLoudinary = async (publicId) => {
    try {
        await cloudinary.uploader.destroy(publicId, { resource_type: 'video' });
    } catch (error) {
        console.log('Failed to delete VIdeo from cloudinary');
        console.log(error);
    }
};
