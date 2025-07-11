import fs from "fs";
import path from "path";

import { IPlayerModel } from "../models/player-model";
import { logger } from "../utils/logger";

export const playerDatabase = async (): Promise<IPlayerModel[]> => {
  try {
    const filepath = path.join(__dirname, "players.json");
    const playersData = JSON.parse(fs.readFileSync(filepath, "utf-8"));
  
    return playersData;
  } catch (error) {
    logger.error({ logPrefix: "playerDatabase" }, "Erro ao buscar os jogadores", error);
    throw new Error("Erro ao buscar os jogadores");
  }
};
