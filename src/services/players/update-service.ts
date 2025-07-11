import fs from "fs";
import path from "path";

import { IPlayerModel } from "../../models/player-model";
import { badRequest, notFound, ok } from "../../utils/http-helpers/http-status-code";
import { logger } from "../../utils/logger";

export const updatePlayerService = async (id: number, playerRequest: IPlayerModel) => {
  let player: IPlayerModel | undefined;

  try {
    const filePath = path.join(__dirname, "../../repositories/players.json");
    const playersData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    
    player = playersData.find((p: IPlayerModel) => p.id === id);
    console.log(player);
    if (!player) {
      return notFound({ message: "Player not found" });
    }

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
  } catch (error) {
    logger.error({ logPrefix: "updatePlayerService" }, "Player não pode ser salvo", error);
    return badRequest(player);
  }

  return ok(player);
}