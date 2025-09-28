import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Course title is required'],
            trim: true,
            maxlength: [80, 'Course title must be less than 80 characters'],
        },
        description: {
            type: String,
            required: [true, 'Course description is required'],
            trim: true,
            maxlength: [
                2000,
                'Course description must be less than 2000 characters',
            ],
        },
        subtitle: {
            type: String,
            trim: true,
            maxlength: [
                100,
                'Course subtitle must be less than 100 characters',
            ],
        },
        category: {
            type: String,
            required: [true, 'Course category is required'],
            trim: true,
        },
        level: {
            type: String,
            enum: {
                values: ['beginner', 'intermediate', 'advanced'],
                message: 'Level is either: beginner, intermediate, advanced',
            },
            default: 'beginner',
        },
        price: {
            type: Number,
            required: [true, 'Course price is required'],
            min: [0, 'Course price must be at least 0'],
        },
        thumbnail: {
            type: String,
            default: 'default-thumbnail.png',
        },
        enrolledStudents: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        lectures: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Lecture',
            },
        ],
        instructor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Course must have an instructor'],
        },
        createBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        isPublished: {
            type: Boolean,
            default: false,
        },
        totalDuration: {
            type: Number,
            default: 0, // in minutes
        },
        totalLectures: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

courseSchema.virtual('averageRating').get(function () {
    return this.reviews.length
        ? this.reviews.reduce((acc, item) => acc + item.rating, 0) /
              this.reviews.length
        : 0;
});

courseSchema.pre('save', function (next) {
    if (this.lectures) {
        this.totalLectures = this.lectures.length;
    }
    next();
});

export const Course = mongoose.model('Course', courseSchema);
