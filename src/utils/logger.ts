import { createLogger } from "bs-logger";

const dataAtual = new Date(Date.now());
const dataFormatada = dataAtual.toISOString().split("T")[0];
const pathName: string = "logs/app-logs-" + dataFormatada;

export const logger = createLogger({
  targets: process.env.NODE_ENV === "production" ? pathName : pathName,
  translate: (m) => {
    if (process.env.NODE_ENV === "production") {
      m.context = { ...m.context, namespace: "server" };
    }
    return m;
  }
});