import fs from "fs";
import path from "path";

import { IClubModel } from "../../models/club-model";
import { logger } from "../../utils/logger";
import { clubsDatabase } from "../clubs-database";

export const updateClubRepository = async (id: number, clubRequest: IClubModel): Promise<IClubModel | undefined> => {
  let club: IClubModel | undefined;

  try {
    const filePath = path.join(__dirname, "../clubs.json");
    const clubsData = await clubsDatabase();
    
    club = clubsData.find((p: IClubModel) => p.id === id);
    if (!club) return undefined;

    club.name = clubRequest.name;
   
    fs.writeFileSync(filePath, JSON.stringify(clubsData));
    return club;
  } catch (error) {
    logger.error({ logPrefix: "updateClubRepository" }, "Club não pode ser atualizado", error);
    throw new Error("Player não pode ser atualizado " + error);
  }
}