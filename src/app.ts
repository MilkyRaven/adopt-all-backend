import express from "express";
import { router } from "./infraestructure/routes/index";
const app = express();

app.use("/animals", router);

export default app;
