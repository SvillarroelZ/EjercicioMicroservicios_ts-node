import mongoose from 'mongoose';
import dotenv from 'dotenv';

mongoose.set('strictQuery', true)
dotenv.config();

const dbConnect = () => {
    const MONGODB_URI: any = process.env.MONGODB_URI;

    mongoose.connect(MONGODB_URI, { 
    })
        .then(() => console.log('Connected successfully to MongoDB'))
        .catch(error => console.error(error));
};

export default dbConnect;


// useNewUrlParser: true,
// useUnifiedTopology: true
