import { IPlayerModel } from "../../models/player-model"
import { playerDatabase } from "../playr-database";

export const findPlayerById = async (
  id: number
): Promise<IPlayerModel | undefined> => {
  let player: IPlayerModel | undefined = playerDatabase.find((p) => p.id === id);

  return player;
}