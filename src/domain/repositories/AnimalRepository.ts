import { Animal } from "../entities/Animal";

export interface AnimalRepository {
  findAll(): Promise<Animal[]>;
}
