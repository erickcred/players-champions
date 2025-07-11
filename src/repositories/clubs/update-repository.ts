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

    // if (club.statistics && clubRequest.statistics) {
    //   club.statistics.overall = clubRequest.statistics.overall ?? club.statistics.overall;
    //   club.statistics.pace = clubRequest.statistics.pace ?? club.statistics.pace;
    //   club.statistics.shooting = clubRequest.statistics.shooting ?? club.statistics.pace;
    //   club.statistics.passing = clubRequest.statistics.passing ?? club.statistics.pace;
    //   club.statistics.dribbling = clubRequest.statistics.dribbling ?? club.statistics.pace;
    //   club.statistics.defending = clubRequest.statistics.defending ?? club.statistics.pace;
    //   club.statistics.physicality = clubRequest.statistics.physicality ?? club.statistics.pace;
    // }

    fs.writeFileSync(filePath, JSON.stringify(clubsData));
    return club;
  } catch (error) {
    logger.error({ logPrefix: "updateClubRepository" }, "Club não pode ser atualizado", error);
    throw new Error("Player não pode ser atualizado " + error);
  }
}