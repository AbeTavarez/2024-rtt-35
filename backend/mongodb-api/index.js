import express from 'express';
import dotenv from 'dotenv';

// Configure our ENV variables
dotenv.config();
console.log(process.env.PORT);
console.log(process.env.MONGODB_URI);


const app = express();
const PORT = process.env.PORT;


app.get('/', (req, res) => res.send('ok'));


app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

