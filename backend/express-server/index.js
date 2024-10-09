import express from "express";

// express app
const app = express();

const PORT = 4000;

// Middleware
function logger(req, res, next) {
  console.log(`Received a request: ${req.method}, ${req.url}, ${req.hostname}`);
  next();
}

app.use(logger);

// ===========  Routes  ===============================
app.get("/", (req, res) => {
  console.log(req.method, req.url, req.hostname);
  res.send("hello");
});

app.get("/express", (req, res) => {
  res.send("<h1>Hello from Express</h1>");
});

app.get("/user", (req, res) => {
  throw new Error("No user data found");
  res.send("Sending user info....");
});

/**
 * @method GET
 * @route /user/:userId/profile/:profileId
 * @description Gets user by id and profile id
 */
app.get("/user/:userId/profile/:profileId", (req, res) => {
  console.log(req.params);

  res.send(req.params);
});

// Chaining methods
app
  .route("/leaner")
  .get((req, res) => {
    res.send("Sending learner data...");
  })
  .post((req, res) => {
    res.send("saving learner data...");
  });

app.get("/user/:username", (req, res) => {
  console.log(req.params);

  res.send(req.params);
});

app.post("/user", (req, res) => {
  console.log(req.method, req.url, req.hostname);
  res.send("Post User Data!!");
});

app.put("/user", (req, res) => {
  console.log(req.method, req.url, req.hostname);
  res.send("Edit User Data!!");
});

app.delete("/user", (req, res) => {
  console.log(req.method, req.url, req.hostname);
  res.send("Delete User Data!!");
});

app.get("/ab?c", (req, res) => {
  console.log(req.method, req.url, req.hostname);
  res.send("Delete User Data!!");
});

app.get(/.*fly$/, (req, res) => {
  res.send("Ends with fly");
});

app.get(/a/, (req, res) => {
  res.send(" Matching anything with a");
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
