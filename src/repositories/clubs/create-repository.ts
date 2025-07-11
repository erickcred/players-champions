import fs from "fs";
import path from "path";

import { IClubModel } from "../../models/club-model";
import { logger } from "../../utils/logger";

export const createClubReposiroty = async (clubRequest: IClubModel): Promise<IClubModel | undefined> => {
  try {
    const filePath = path.join(__dirname, "../clubs.json");
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([]));
    }
    const clubData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const id = clubData.length + 1;

    clubRequest.id = id;
    clubData.push(clubRequest);

    fs.writeFileSync(filePath, JSON.stringify(clubData));
    return clubRequest;
  }
  catch (error) {
    logger.error({ logPrefix: "createClubReposiroty" }, "Erro ao criar o club", error);
    throw new Error("Erro ao criar o club " + error);
  }
  
}