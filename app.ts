import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { list } from "./src/controllers/accountController";

dotenv.config();

const app = express();
app.use(cors());

app.get("/health", (_: Request, res: Response) => res.status(200).json("OK"));
app.get("/", list);

app.listen(process.env.PORT || 3001, () =>
  console.log(`Server running at http://localhost:${process.env.PORT || 3001}`)
);
