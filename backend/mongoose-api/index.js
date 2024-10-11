import express from "express";
import mongoose from "mongoose";
import postsRouter from './routes/posts.js';

import dotenv from 'dotenv'; 
dotenv.config();

try {
    await mongoose.connect(process.env.MONGODB_URI);
    // mongoose.connection.on('connected', () => console.log('connected'));
} catch (e) {
    console.error(e)
}

const app = express();

const PORT = process.env.PORT;


// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.use('/api/posts', postsRouter);



app.get("/", (req, res) => {
  res.json({ msg: "Welcome to my API!" });
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
