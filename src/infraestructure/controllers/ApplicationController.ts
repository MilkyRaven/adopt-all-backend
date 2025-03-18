import { Request, Response } from "express";
import { ApplicationRepository } from "../../domain/repositories/ApplicationRepository";
import { FindAllApplicationsByUser } from "../../application/FindAllApplicationsByUser";
import { CreateApplication } from "../../application/CreateApplication";
import { UpdateApplication } from "../../application/UpdateApplication";
import { DeleteApplication } from "../../application/DeleteApplication";
export class ApplicationController {
  constructor(private repository: ApplicationRepository) {}
  getAll = async (req: Request, res: Response) => {
    const { userId } = req.params;
    //handle when userId is not provided
    const findAllApplicationsByUser = new FindAllApplicationsByUser(
      this.repository
    );
    const user = await findAllApplicationsByUser.execute(userId);
    if (!user) {
      res
        .status(404)
        .json({ message: `Applications for user ${userId} not found` });
    } else {
      res.status(200).send(user);
    }
  };
  create = async (req: Request, res: Response) => {
    const applicationData = req.body;
    const createApplication = new CreateApplication(this.repository);
    const applicationId = await createApplication.execute(applicationData);
    res.status(201).send(applicationId);
  };
  update = async (req: Request, res: Response) => {
    try {
      const { applicationId } = req.params;
      const applicationData = req.body;
      const updateApplication = new UpdateApplication(this.repository);
      await updateApplication.execute(applicationId, applicationData);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  };
  delete = async (req: Request, res: Response) => {
    const { applicationId } = req.params;
    const deleteApplication = new DeleteApplication(this.repository);
    await deleteApplication.execute(applicationId);
    res.sendStatus(200);
  };
}
