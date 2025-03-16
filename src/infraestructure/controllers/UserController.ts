import { Request, Response } from "express";
import { UserRepository } from "../../domain/repositories/UserRepository";

export class UserController {
  constructor(private repository: UserRepository) {}
  getUser = async (req: Request, res: Response) => {
    const { userId } = req.params;
    //handle when userId is not provided
    const user = await this.repository.findUser(userId);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).send(user);
    }
  };
}
