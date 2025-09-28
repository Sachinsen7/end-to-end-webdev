import mongoose from 'mongoose';

const lectureProgressSchema = new mongoose.Schema({
    lecture: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lecture',
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    watchTime: {
        type: Number,
        default: 0,
    },
    lastWatchedAt: {
        type: Date,
        default: Date.now(),
    },
});

const courseProgressSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'User ID is required'],
        },
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course',
            required: [true, 'Course ID is required'],
        },
        isCompleted: {
            type: Boolean,
            default: false,
        },
        completionPercentage: {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },
        lecturesProgress: [lectureProgressSchema],
        lastAccessedAt: {
            type: Date,
            default: Date.now(),
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

// calculate course completion percentage

courseProgressSchema.methods.calculateCompletion = function (next) {
    if (this.lecturesProgress.length > 0) {
        const completedLectures = this.lecturesProgress.filter(
            (lec) => lec.isCompleted
        ).length;
        this.completionPercentage = Math.round(
            (completedLectures / this.lecturesProgress.length) * 100
        );
        this.isCompleted = this.completionPercentage === 100;
        return this.save({ validateBeforeSave: false });
    }
    next();
};

// update last accessed at before save

courseProgressSchema.methods.updateLastAccessed = function (next) {
    this.lastAccessedAt = Date.now();
    return this.save({ validateBeforeSave: false });
    next();
};

export const CourseProgress = mongoose.model(
    'CourseProgress',
    courseProgressSchema
);
