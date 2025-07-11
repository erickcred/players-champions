import fs from "fs";
import path from "path";

import { IPlayerModel } from "../../models/player-model";
import { logger } from "../../utils/logger";
import { playerDatabase } from "../players-database";

export const updatePlayerRepository = async (id: number, playerRequest: IPlayerModel): Promise<IPlayerModel | undefined> => {
  let player: IPlayerModel | undefined;

  try {
    const filePath = path.join(__dirname, "../players.json");
    const playersData = await playerDatabase();
    
    player = playersData.find((p: IPlayerModel) => p.id === id);
    if (!player) return undefined;

    player.name = playerRequest.name;
    player.club = playerRequest.club;
    player.nationality = playerRequest.nationality;
    player.position = playerRequest.position;

    if (player.statistics && playerRequest.statistics) {
      player.statistics.overall = playerRequest.statistics.overall ?? player.statistics.overall;
      player.statistics.pace = playerRequest.statistics.pace ?? player.statistics.pace;
      player.statistics.shooting = playerRequest.statistics.shooting ?? player.statistics.pace;
      player.statistics.passing = playerRequest.statistics.passing ?? player.statistics.pace;
      player.statistics.dribbling = playerRequest.statistics.dribbling ?? player.statistics.pace;
      player.statistics.defending = playerRequest.statistics.defending ?? player.statistics.pace;
      player.statistics.physicality = playerRequest.statistics.physicality ?? player.statistics.pace;
    }

    fs.writeFileSync(filePath, JSON.stringify(playersData));
    return player;
  } catch (error) {
    logger.error({ logPrefix: "updatePlayerRepository" }, "Player não pode ser salvo", error);
    throw new Error("Player não pode ser salvo " + error);
  }
}