import { Router } from "express";
import { AnimalController } from "../controllers/AnimalController";
import { AnimalRepositoryFirestore } from "../repositories/AnimalRepositoryFirestore";
export const router = Router();
const animalRepository = new AnimalRepositoryFirestore();
const animalController = new AnimalController(animalRepository);

//router.get("/", animalController.getAll);
router.get("/", (req, res) => animalController.getAll(req, res));
