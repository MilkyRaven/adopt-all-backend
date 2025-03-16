import express from "express";
import { userRouter } from "./infraestructure/routes/UserRoutes";
import { animalRouter } from "./infraestructure/routes/AnimalRoutes";
import { applicationRouter } from "./infraestructure/routes/ApplicationRoutes";
const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/animals", animalRouter);
app.use("/applications", applicationRouter);

export default app;
