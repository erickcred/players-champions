import { IPlayerModel } from "../../models/player-model"
import { playerDatabase } from "../playr-database";

export const findAllPlayers = async (): Promise<IPlayerModel[]> => {
  return playerDatabase;
}