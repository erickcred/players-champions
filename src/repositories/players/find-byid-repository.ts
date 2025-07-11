import { IPlayerModel } from "../../models/player-model"
import { playerDatabase } from "../players-database";

export const findPlayerById = async (
  id: number
): Promise<IPlayerModel | undefined> => {
  let player: IPlayerModel | undefined = (await playerDatabase()).find((p) => p.id === id);

  return player;
}