import { ApplicationRepository } from "../domain/repositories/ApplicationRepository";

export class DeleteApplication {
  constructor(private repository: ApplicationRepository) {}
  //not sure if this params passed through execute is ok
  async execute(applicationId: string): Promise<void> {
    return await this.repository.delete(applicationId);
  }
}
