import { Application } from "../../domain/entities/Application";
import { ApplicationRepository } from "../../domain/repositories/ApplicationRepository";
import { db } from "../../firebase.config";

export class ApplicationRepositoryFirestore implements ApplicationRepository {
  async findAll(userId: string): Promise<Application[] | null> {
    const query = await db
      .collection("applications")
      .where("userId", "==", userId)
      .get();
    return query.docs.map((doc) => {
      const data = doc.data();
      return new Application(
        doc.id,
        data.createdAt,
        data.animalId,
        data.userId,
        data.hasYard,
        data.hasHadPetsBefore,
        data.comments
      );
    });
  }
  async create(application: Application): Promise<string> {
    const docRef = await db.collection("applications").add({
      createdAt: application.createdAt,
      animalId: application.animalId,
      userId: application.userId,
      hasYard: application.hasYard,
      hasHadPetsBefore: application.hasHadPetsBefore,
      comments: application.comments,
    });
    return docRef.id;
  }
  async update(
    applicationId: string,
    updatedData: Partial<Application>
  ): Promise<void> {
    await db.collection("applications").doc(applicationId).update(updatedData);
  }
  async delete(applicationId: string): Promise<void> {
    await db.collection("applications").doc(applicationId).delete();
  }
}
