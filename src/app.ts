import express, { Request, Response, json } from "express";
import { getPlayer } from "./controllers/players-controller";

function createApp() {
  const app = express();
  
  app.use(json());
  
  app.use("/api/players", getPlayer);

  return app;
};

export default createApp;