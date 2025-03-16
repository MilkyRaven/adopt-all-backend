import { Application } from "../domain/entities/Application";
import { ApplicationRepository } from "../domain/repositories/ApplicationRepository";

export class UpdateApplication {
  constructor(private repository: ApplicationRepository) {}
  //not sure if this params passed through execute is ok
  async execute(
    applicationId: string,
    applicationData: Partial<Application>
  ): Promise<void> {
    return await this.repository.update(applicationId, applicationData);
  }
}
