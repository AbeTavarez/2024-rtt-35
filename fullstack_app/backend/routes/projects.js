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
 * GET /api/projects/:id
 * @description fetches single project by the id
 */
router.get("/:id", async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);

    if (project) {
      res.json({ project });
    } else {
      res.json({ message: `No project found with id: ${req.params.id}` });
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

/**
 * DELETE /api/projects/:id
 */
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);

    if (deletedProject) {
      res.json({
        message: `Project deleted: ${req.params.id}`,
        deletedProject,
      });
    } else {
      res.json({ message: `Error deleting project: ${req.params.id}` });
    }
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/projects/:id
 * @description Update a document by the id
 */
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updatedProject = await Project.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (updatedProject) {
        res.json({ updatedProject });
    } else {
        res.json({ message: `Error updating project: ${req.params.id}` });
    }
  } catch (error) {
    next(error);
  }
});

export default router;
