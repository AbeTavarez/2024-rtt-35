import express from "express";

import { users } from "./data/users.js";
import { posts } from "./data/posts.js";

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
  ${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`
    );
    if (Object.keys(req.body).length > 0) {
      console.log("Containing the data:");
      console.log(`${JSON.stringify(req.body)}`);
    }
    next();
  });

// ======= API Routes

/**
 * GET
 */
app.get("/api/users", (req, res) => {
  res.json(users);
});

/**
 * GET by id
 */
app.get("/api/users/:id", (req, res, next) => {
  console.log(req.params);
  const user = users.find((user) => user.id == req.params.id);
  if (user) {
    res.json(user);
  } else {
    next(); // calls the custom 404 middleware
  }
});

/**
 * POST
 */
app.post("/api/users", (req, res) => {
  console.log(req.body);

  if (req.body.name && req.body.username && req.body.email) {
    if (users.find((u) => u.username == req.body.username)) {
      res.json({ error: "Username Already Taken" });
      return;
    }

    const user = {
      id: users[users.length - 1].id + 1,
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
    };

    users.push(user);
    res.json(users[users.length - 1]);
  }
});

/**
 * PATCH OR UPDATE by id
 */
app.patch("/api/users/:id", (req, res, next) => {
  console.log(req.params);

  const user = users.find((u, i) => {
    if (u.id == req.params.id) {
      for (const key in req.body) {
        users[i][key] = req.body[key];
      }
      return true;
    }
  });

  if (user) res.json(user);
  else next();
});

/**
 * DELETE by id
 */
app.delete("/api/users/:id", (req, res, next) => {
  console.log(req.params);

  const user = users.find((u, i) => {
    if (u.id == req.params.id) {
      users.splice(i, 1);
      return true;
    }
  });

  if (user) res.json(user);
  else next();
});

/**
 * GET
 */
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

/**
 * GET id
 */
app.get("/api/posts/:id", (req, res, next) => {
  console.log(req.params);
  const post = posts.find((post) => post.id == req.params.id);

  if (post) {
    res.json(post);
  } else {
    next(); // calls the custom 404 middleware
  }
});

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
