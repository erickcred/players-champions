import express, { Request, Response, json } from "express";
import { logger } from "./utils/logger";

const port = process.env.PORT || 3333;
const app = express();

app.use(json());

app.get("/api", (req: Request, res: Response) => {
  res.status(200);
  res.json({ player: "Beqran" });
});


app.listen(port, () => {
  console.log(`Server is running port http://localhost:${port}`);
});