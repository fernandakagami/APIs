import express from "express";
import UserController from "../controllers/usersController.js";

const router = express.Router();

router
  .get("/users", UserController.index)
  .post("/users", UserController.register)
  .delete("/users/:id", UserController.delete)
  .patch("/users/:id", UserController.edit)
  .get("/users/:id", UserController.show)
export default router;