import { Router } from "express";
import Project from "../models/Project.js";

const router = new Router();

/**
 * GET /api/projects/
 * @description fetches all projects
 */
router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.find();

    if (projects) {
      res.json({ projects });
    } else {
      res.json({ message: "No projects found" });
    }
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/projects/
 * @description create a new project document
 */
router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);

    const newProject = await Project.create(req.body);

    if (newProject) {
      res.status(201).json({ project: newProject });
    } else {
      res.status(400).json({ message: "Error creating new project" });
    }
  } catch (error) {
    next(error);
  }
});

export default router;
