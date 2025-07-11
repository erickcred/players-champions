import fs from "fs";
import path from "path";

import { IPlayerModel } from "../../models/player-model";
import { logger } from "../../utils/logger";

export const createPlayerReposiroty = async (playerRequest: IPlayerModel): Promise<IPlayerModel | undefined> => {
  try {
    const filePath = path.join(__dirname, "../players.json");
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([]));
    }
    const playersData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const id = playersData.length + 1;

    playerRequest.id = id;
    playersData.push(playerRequest);

    fs.writeFileSync(filePath, JSON.stringify(playersData));
    return playerRequest;
  }
  catch (error) {
    logger.error({ logPrefix: "createPlayerReposiroty" }, "Erro ao criar o jogador", error);
    throw new Error("Erro ao criar o jogador" + error);
  }
  
}