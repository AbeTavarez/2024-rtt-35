import express from "express";
import userRouter from "./routes/user.js";

// express app
const app = express();

const PORT = 4000;

app.set("view engine", "pug");
app.set("views", "./views");

// Middleware
app.use(express.static('public'))
app.use("/user", userRouter);

// Routes
app.get("/", (req, res) => {
  // res.send('<h1>Hello World!</h1>')
  res.render("index", { title: "Hello Pug!", message: "Created using Pug" });
});

// Catch all route
app.use("*", (req, res) => {
  throw new Error("Route not found");
});

// Error handling middleware
app.use((error, req, res, next) => {
  res.status(404).send(error.message);
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
