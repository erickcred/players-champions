import fs from "fs";
import path from "path";

import { IPlayerModel } from "../../models/player-model";
import { logger } from "../../utils/logger";
import { playerDatabase } from "../players-database";

export const deletePlayerRepository = async (id: number): Promise<IPlayerModel | undefined> => {
  let player: IPlayerModel | undefined;

  try {
    const filePath = path.join(__dirname, "../players.json");
    const playersData = await playerDatabase();
    const playerIndex = playersData.findIndex((p: any) => p.id === id);
    
    if (playerIndex === -1) return undefined;

    player = playersData[playerIndex];
    
    playersData.splice(playerIndex, 1);
    fs.writeFileSync(filePath, JSON.stringify(playersData));
    return player;
  } catch (error) {
    logger.error({ logPrefix: "deletePlayerRepository"}, "Erro ao deletar Player", error );
    return undefined
  }
}