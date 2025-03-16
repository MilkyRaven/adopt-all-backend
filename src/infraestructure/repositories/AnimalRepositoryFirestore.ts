import { Animal } from "../../domain/entities/Animal";
import { AnimalRepository } from "../../domain/repositories/AnimalRepository";
import { db } from "../../firebase.config";

export class AnimalRepositoryFirestore implements AnimalRepository {
  async findAll(queryParams: Partial<Record<string, any>>): Promise<Animal[]> {
    let firestoreQuery: FirebaseFirestore.Query = db.collection("animals");

    const filters: Record<string, any> = {
      species: queryParams.species,
      age: queryParams.age,
    };

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined) {
        firestoreQuery = firestoreQuery.where(key, "==", value);
      }
    });

    if (queryParams.orderBy) {
      firestoreQuery = firestoreQuery.orderBy("entryDate", queryParams.orderBy);
    }

    const snapshot = await firestoreQuery.get();

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
