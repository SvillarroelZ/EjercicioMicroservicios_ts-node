import mongoose, { Schema } from 'mongoose';

const AccountSchema: Schema = new Schema({
    ownerId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    balance: {
        type: Number,
        required: true,
    },
    number: {
        type: Number,
        required: true,
        unique: true,
    },
},
{
    timestamps:true, //createdAt, updatedAt
    versionKey: false
});

export default mongoose.model('Account', AccountSchema);
