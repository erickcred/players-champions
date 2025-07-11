import express, { json } from "express";
import cors from "cors";
import router from "./router/routes";

function createApp() {
  const app = express();
  
  app.use(json());
  app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }));
  
  app.use("/api", router);

  return app;
};

export default createApp;