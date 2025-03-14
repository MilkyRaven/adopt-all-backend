import { Request, Response } from "express";
import { AnimalRepository } from "../../domain/repositories/AnimalRepository";

export class AnimalController {
  constructor(private repository: AnimalRepository) {}
  getAll = async (req: Request, res: Response) => {
    const animals = await this.repository.findAll();
    res.status(200).send(animals);
  };
}
