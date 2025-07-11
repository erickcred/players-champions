import { IPlayerModel } from "../../models/player-model"
import { playerDatabase } from "../players-database";

export const findAllPlayers = async (): Promise<IPlayerModel[]> => {
  return await playerDatabase();
}