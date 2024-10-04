import { Router } from "express";
import { posts } from "../data/posts.js";

const postsRouter = Router();

/**
 * GET
 */
postsRouter.get("/", (req, res) => {
  res.json(posts);
});

/**
 * GET id
 */
postsRouter.get("/:id", (req, res, next) => {
  console.log(req.params);
  const post = posts.find((post) => post.id == req.params.id);

  if (post) {
    res.json(post);
  } else {
    next(); // calls the custom 404 middleware
  }
});

export default postsRouter;