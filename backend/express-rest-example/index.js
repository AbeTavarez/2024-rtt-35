import express from "express";
import postsRouter from "./routes/posts.js";
import usersRouter from "./routes/users.js"; // export default
import { error } from "./utils/error.js"; // named export

const app = express();
const PORT = 4000;

// Valid API Keys.
const apiKeys = ["perscholas", "ps-example", "hJAsknw-L198sAJD-l3kasx"];

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

// API KEY middleware
app.use("/api", function (req, res, next) {
  var key = req.query["api-key"];

  // Check for the absence of a key.
  if (!key) {
    // res.status(400);
    // return res.json({ error: "API Key Required" });
    next(error(400, "API Key Required"));
  }

  // Check for key validity.
  if (apiKeys.indexOf(key) === -1) {
    // res.status(401);
    // return res.json({ error: "Invalid API Key" });
    next(error(401, "Invalid API Key"));
  }

  // Valid key! Store it in req.key for route access.
  req.key = key;
  next();
});

// ======= API Routes
app.use("/api/posts", postsRouter);
app.use("/api/users", usersRouter);

// ======== Routes
app.get("/", (req, res) => {
  res.send("ok");
});

// ======= Error middlewares =======

// Custom 404 (not found) middleware.
// app.use((req, res, next) => {
//   //   res.status(404).json({ error: "Resource Not Found" });
//   next(error(404, "Resource Not Found"));
// });

// Error middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ error: error.message });
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
