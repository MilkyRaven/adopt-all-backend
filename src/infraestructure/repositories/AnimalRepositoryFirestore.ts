import { Animal } from "../../domain/entities/Animal";
import { AnimalRepository } from "../../domain/repositories/AnimalRepository";
import { db } from "../../firebase.config";

export class AnimalRepositoryFirestore implements AnimalRepository {
  async findAll(): Promise<Animal[]> {
    const snapshot = await db.collection("animals").get();
    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return new Animal(
        doc.id,
        data.name,
        data.description,
        data.age,
        data.image,
        data.neutered,
        data.species,
        data.entryDate,
        data.location
      );
    });
  }
}
