import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { list } from "./src/controllers/accountController";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/health", (_: Request, res: Response) => res.status(200).send("OK"));
app.get("/list-accounts", list);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
