import express, { Request, Response } from "express";

const app = express();

app.use((req: Request, res: Response) => {
  console.log(`Received ${req.method} request to ${req.path}`);
  res.send(200);
});

export default app;
