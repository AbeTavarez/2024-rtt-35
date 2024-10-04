import express from "express";

import { users } from "./data/users.js";
import { posts } from "./data/posts.js";

const app = express();
const PORT = 4000;

// ======= API Routes
app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  console.log(req.params);
  const user = users.find((user) => user.id == req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.json({ error: "User not found" });
  }
});

app.get('/api/posts', (req, res) => {
    res.json(posts)
});

app.get('/api/posts/:id', (req, res) => {
    console.log(req.params);
    const post = posts.find(post => post.id == req.params.id)

    if (post) {
        res.json(post)
    } else {
        res.json({error: `Post with id ${req.params.id} was not found!`})
    }
    
})

// ======== Routes
app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
