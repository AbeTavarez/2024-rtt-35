import { Router } from "express";
import Post from "../model/Post.js";

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    // console.log(posts);
    res.json(posts);
  } catch (e) {
    console.error(e);
  }
});

/**
 * POST /
 * @description create a new post doc
 */
router.post("/", async (req, res) => {
  try {
    const { body } = req;

    const newPost = await Post.create(body);

    if (newPost) {
        res.json(newPost);
    } else {
        res.json({error: 'Error creating post!'})
    }

  } catch (e) {
    console.error(e);
  }
});

export default router;
