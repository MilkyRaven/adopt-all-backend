import { Animal } from "../domain/entities/Animal";
import { AnimalRepository } from "../domain/repositories/AnimalRepository";

export class FindAllAnimals {
  constructor(private repository: AnimalRepository) {}
  async execute(): Promise<Animal[]> {
    return await this.repository.findAll();
  }
}
