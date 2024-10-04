import { Router } from "express";
import { users } from "../data/users.js";
import { error } from "../utils/error.js";

const usersRouter = Router();

/**
 * GET
 */
usersRouter.get("/", (req, res, next) => {
  console.log(req.query);
  console.log("APIKEY::: ", req.key);

    // next(error(402, 'Something went wrong!'))

  res.json(users);
});

/**
 * GET by id
 */
usersRouter.get("/:id", (req, res, next) => {
  console.log(req.params);
  const user = users.find((user) => user.id == req.params.id);
  if (user) {
    res.json(user);
  } else {
    next(error(404, "Resource not found!")); // calls the custom 404 middleware
  }
});

/**
 * POST
 */
usersRouter.post("/", (req, res) => {
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
usersRouter.patch("/:id", (req, res, next) => {
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
usersRouter.delete("/:id", (req, res, next) => {
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

export default usersRouter;
