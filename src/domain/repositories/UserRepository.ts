import { User } from "../entities/User";

export interface UserRepository {
  findUser(userId: string): Promise<User | null>;
}
