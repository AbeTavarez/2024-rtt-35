import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import projectsRouter from './routes/projects.js';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

// ===== Connect to DB ===== //
try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to mongodb`);
} catch (error) {
    console.error(error);  
}

// ===== Middlewares ===== //
app.use(morgan('dev')); // logger
app.use(express.json()); // parse data to the body
app.use(express.urlencoded({extended: true}));
app.use(cors()); // allows backend to talk to frontend in the same machine

// ===== Routes ===== //
app.use('/api/projects', projectsRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my API!')
});

// ===== Error Middlewares ===== //
app.use((e, req, res, next) => {
    console.error(e);
    res.status(500).json({message: e.message, error: e });
});


app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))