import { Router } from "express";
import { AnimalController } from "../controllers/AnimalController";
import { AnimalRepositoryFirestore } from "../repositories/AnimalRepositoryFirestore";

const animalRepository = new AnimalRepositoryFirestore();
const animalController = new AnimalController(animalRepository);

export const animalRouter = Router();

animalRouter.get("/", (req, res) => animalController.getAll(req, res));
