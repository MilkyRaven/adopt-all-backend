import { Animal } from "../entities/Animal";

export interface AnimalRepository {
  findAll(query: any): Promise<Animal[]>;
}
