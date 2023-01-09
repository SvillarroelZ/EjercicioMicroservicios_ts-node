import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            //match: /^\S+@\S+\.\S+$/,
            message: 'El correo debe tener un formato válido',
        },
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: (value: string) => value.length === 9,
            message: 'El teléfono debe tener 9 dígitos',
        },
    },
    rut: {
        type: Number,
        required: true,
        unique: true,
    },
},
{
    timestamps:true, //createdAt, updatedAt
    versionKey: false
});

export default mongoose.model('Client', clientSchema);