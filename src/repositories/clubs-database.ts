import fs from "fs";
import path from "path";

import { IClubModel } from "../models/club-model";
import { logger } from "../utils/logger";

export const clubsDatabase = async (): Promise<IClubModel[]> => {
  try {
    const filepath = path.join(__dirname, "clubs.json");
    if (!fs.existsSync(filepath)) {
      fs.writeFileSync(filepath, JSON.stringify([]));
    }

    const clubsData = JSON.parse(fs.readFileSync(filepath, "utf-8"));
  
    return clubsData;
  } catch (error) {
    logger.error({ logPrefix: "clubDatabase" }, "Erro ao buscar os clubs", error);
    throw new Error("Erro ao buscar os clubs");
  }
};
