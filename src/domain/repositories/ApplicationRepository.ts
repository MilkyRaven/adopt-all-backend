import { Application } from "../entities/Application";

export interface ApplicationRepository {
  findAll(userId: string): Promise<Application[] | null>;
  create(application: Application): Promise<string>;
  update(
    applicationId: string,
    updatedData: Partial<Application>
  ): Promise<void>;
  delete(applicationId: string): Promise<void>;
}
