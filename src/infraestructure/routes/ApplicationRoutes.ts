import { Router } from "express";
import { ApplicationController } from "../controllers/ApplicationController";
import { ApplicationRepositoryFirestore } from "../repositories/ApplicationRepositoryFirestore";

export const applicationRouter = Router();

const applicationRepository = new ApplicationRepositoryFirestore();

const applicationController = new ApplicationController(applicationRepository);

//GET
applicationRouter.get("/:userId", (req, res) =>
  applicationController.getAll(req, res)
);

//POST
applicationRouter.post("/", (req, res) => {
  applicationController.create(req, res);
});

//PUT
applicationRouter.put("/:applicationId", (req, res) =>
  applicationController.update(req, res)
);

//DELETE
applicationRouter.delete("/:applicationId", (req, res) => {
  applicationController.delete(req, res);
});
