import express from "express";
import morgan from 'morgan';

const app = express();
const PORT = 4000;

// setup
app.set('view engine', 'pug');
app.set('views', './views');

// middleware
app.use(express.static('public'));
app.use(morgan('dev')); // logger

// routes
app.get('/', (req, res) => {
    // res.send('Hello')

    // fetching blog post...

    res.render('home', {username: 'Abe', title: 'Acme Inc'});
});

app.get('/services', (req, res) => {
    // res.redirect('/pricing')
    res.render('services')
});

app.get('/pricing', (req, res) => {
    res.render('pricing')
});

// dynamic route/dynamic template
app.get('/blog/:id', async (req, res) => {
    // fetching the blog by the id....
    const blog = await fetch(`//https:myblogs${id}`)
    res.render('blog', {blog})
});



app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
