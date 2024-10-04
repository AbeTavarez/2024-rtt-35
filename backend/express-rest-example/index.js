import express from "express";
import postsRouter from "./routes/posts.js";
import usersRouter from "./routes/users.js";

const app = express();
const PORT = 4000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

// New logging middleware to help us keep track of
// requests during testing!
app.use((req, res, next) => {
  const time = new Date();

  console.log(
    `-----
  ${time.toLocaleTimeString()}: Received a ${req.method} request to ${
      req.url
    }.`,
  );
  if (Object.keys(req.body).length > 0) {
    console.log("Containing the data:");
    console.log(`${JSON.stringify(req.body)}`);
  }
  next();
});

// ======= API Routes
app.use("/api/posts", postsRouter);
app.use("/api/users", usersRouter);

// ======== Routes
app.get("/", (req, res) => {
  res.send("ok");
});

// ======= Error middlewares

// Custom 404 (not found) middleware.
app.use((req, res) => {
  res.status(404).json({ error: "Resource Not Found" });
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
