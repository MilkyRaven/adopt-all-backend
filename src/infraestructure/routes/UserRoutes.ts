import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { UserRepositoryFirestore } from "../repositories/UserRepositoryFirestore";

const userRepository = new UserRepositoryFirestore();
const userController = new UserController(userRepository);

export const userRouter = Router();
userRouter.get("/:userId", (req, res) => userController.getUser(req, res));
