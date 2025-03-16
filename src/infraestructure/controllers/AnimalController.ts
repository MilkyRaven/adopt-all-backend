import { Request, Response } from "express";
import { AnimalRepository } from "../../domain/repositories/AnimalRepository";
import { FindAllAnimals } from "../../application/FindAllAnimals";
export class AnimalController {
  constructor(private repository: AnimalRepository) {}
  getAll = async (req: Request, res: Response) => {
    const query = req.query;
    const findAllAnimals = new FindAllAnimals(this.repository);
    const animals = await findAllAnimals.execute(query);
    res.status(200).send(animals);
  };
}
