import { User } from "../domain/entities/User";
import { UserRepository } from "../domain/repositories/UserRepository";

export class FindUser {
  constructor(private repository: UserRepository) {}
  //not sure if this userId passed through execute is ok
  async execute(userId: string): Promise<User | null> {
    return await this.repository.findUser(userId);
  }
}
