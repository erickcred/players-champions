import fs from "fs";
import path from "path";

import { IClubModel } from "../../models/club-model";
import { logger } from "../../utils/logger";
import { clubsDatabase } from "../clubs-database";

export const deleteClubRepository = async (id: number): Promise<IClubModel | undefined> => {
  let club: IClubModel | undefined;

  try {
    const filePath = path.join(__dirname, "../clubs.json");
    const clubsData = await clubsDatabase();
    const clubIndex = clubsData.findIndex((p: any) => p.id === id);
    
    if (clubIndex === -1) return undefined;

    club = clubsData[clubIndex];
    
    clubsData.splice(clubIndex, 1);
    fs.writeFileSync(filePath, JSON.stringify(clubsData));
    return club;
  } catch (error) {
    logger.error({ logPrefix: "deleteClubRepository"}, "Erro ao deletar Club", error );
    return undefined
  }
}