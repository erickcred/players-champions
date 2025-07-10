import express, { json } from "express";
import router from "./router/routes";

function createApp() {
  const app = express();
  
  app.use(json());
  
  app.use("/api", router);

  return app;
};

export default createApp;