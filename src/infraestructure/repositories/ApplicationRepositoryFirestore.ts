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
        data.animalId,
        data.userId,
        data.fullName,
        data.email,
        data.comments,
        data.createdAt
      );
    });
  }
  async create(application: Application): Promise<string> {
    // Generate a new document ID
    const docRef = db.collection("applications").doc();
    const id = docRef.id;

    // Create the document with the ID included in the data
    await docRef.set({
      id: id,
      createdAt: application.createdAt,
      animalId: application.animalId,
      fullName: application.fullName,
      email: application.email,
      userId: application.userId,
      comments: application.comments,
    });

    return id;
  }
  async update(
    applicationId: string,
    updatedData: Partial<Application>
  ): Promise<void> {
    try {
      await db
        .collection("applications")
        .doc(applicationId)
        .update(updatedData);
    } catch (error) {
      console.log(error);
    }
  }
  async delete(applicationId: string): Promise<void> {
    await db.collection("applications").doc(applicationId).delete();
  }
}
