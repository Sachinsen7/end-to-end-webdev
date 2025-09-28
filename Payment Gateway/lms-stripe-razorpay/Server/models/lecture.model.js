import mongoose from 'mongoose';

const lectureSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Lecture title is required'],
            trim: true,
            maxlength: [80, 'Lecture title must be less than 80 characters'],
        },
        description: {
            type: String,
            required: [true, 'Lecture description is required'],
            trim: true,
            maxlength: [
                2000,
                'Lecture description must be less than 2000 characters',
            ],
        },
        videoUrl: {
            type: String,
            required: [true, 'Lecture video URL is required'],
            trim: true,
        },
        duration: {
            type: Number,
            required: [true, 'Lecture duration is required'],
        },
        publicId: {
            type: String,
            required: [true, 'Lecture public ID is required'],
        },
        isPreview: {
            type: Boolean,
            default: false,
        },
        order: {
            type: Number,
            default: 0,
            required: [true, 'Lecture order is required'],
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

lectureSchema.pre('save', function (next) {
    if (this.duration) {
        this.duration = Math.round(this.duration * 100) / 100;
    }

    next();
});

export const Lecture = mongoose.model('Lecture', lectureSchema);
