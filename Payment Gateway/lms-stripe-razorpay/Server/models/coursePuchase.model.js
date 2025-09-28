import mongoose from 'mongoose';

const coursePurchaseSchema = new mongoose.Schema(
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
        amount: {
            type: Number,
            required: [true, 'Amount is required'],
            min: [0, 'Amount must be at least 0'],
        },
        currency: {
            type: String,
            required: [true, 'Currency is required'],
            trim: true,
            default: 'USD',
        },
        status: {
            type: String,
            enum: {
                values: ['pending', 'completed', 'failed', 'refunded'],
                message:
                    'Status is either: pending, completed, failed, refunded',
            },
            default: 'pending',
            required: [true, 'Status is required'],
        },

        paymentMethod: {
            type: String,
            required: [true, 'Payment method is required'],
            trim: true,
        },

        paymentId: {
            type: String,
            required: [true, 'Payment ID is required'],
            trim: true,
            unique: true,
        },
        refundId: {
            type: String,
        },
        refundAmount: {
            type: Number,
            min: [0, 'Refund amount must be at least 0'],
            default: 0,
        },
        refundReason: {
            type: String,
            trim: true,
        },
        metadata: {
            type: Map,
            of: String,
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

coursePurchaseSchema.index({ user: 1, course: 1 }, { unique: true });
coursePurchaseSchema.index({ status: 1 });
coursePurchaseSchema.index({ createdAt: -1 });

coursePurchaseSchema.virtual('isRefunded').get(function () {
    if (this.status !== 'refunded') return false;
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    return this.createdAt >= thirtyDaysAgo;
});

// method to process refund

coursePurchaseSchema.methods.processRefund = async function (reason, amount) {
    this.status = 'refunded';
    this.refundReason = reason;
    this.refundAmount = amount || this.amount;
    return this.save();
};

export const CoursePurchase = mongoose.model(
    'CoursePurchase',
    coursePurchaseSchema
);
