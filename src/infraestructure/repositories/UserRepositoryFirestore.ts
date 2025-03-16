import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { db } from "../../firebase.config";

export class UserRepositoryFirestore implements UserRepository {
  async findUser(userId: string): Promise<User | null> {
    const docSnap = await db.collection("users").doc(userId).get();
    const data = docSnap.exists ? docSnap.data() : null;
    if (!data) return null;

    return new User(data.id, data.name, data.email, data.location);
  }
}
