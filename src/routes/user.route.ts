import { Router } from "express";
import { usersControllers } from "../controllers/users.controllers";

export const userRoutes = Router();

userRoutes.get("/users", usersControllers.getAll);
userRoutes.get("/users/:id", usersControllers.getById);
userRoutes.post("/users", usersControllers.create);
userRoutes.put("/users/:id", usersControllers.update);
userRoutes.delete("/users/:id", usersControllers.delete);