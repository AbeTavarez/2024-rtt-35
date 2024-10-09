import express from 'express';
import gradesRouter from './routes/grades.js';
// import './loadEnv.js';

const app = express();
const PORT = process.env.PORT;

// middlewares
app.use(express.json());

app.use('/api/grades', gradesRouter);


app.get('/', (req, res) => res.send('ok'));


app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));