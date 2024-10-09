import dotenv from 'dotenv';
// Configure our ENV variables
dotenv.config();
console.log(process.env.PORT);
console.log(process.env.MONGODB_URI);