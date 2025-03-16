import { Application } from "../domain/entities/Application";
import { ApplicationRepository } from "../domain/repositories/ApplicationRepository";

export class FindAllApplicationsByUser {
  constructor(private repository: ApplicationRepository) {}
  //not sure if this userId passed through execute is ok
  async execute(userId: string): Promise<Application[] | null> {
    return await this.repository.findAll(userId);
  }
}
