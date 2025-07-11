import { IPlayerModel } from "../../models/player-model"
import { playerDatabase } from "../players-database";

export const findPlayerById = async (
  id: number
): Promise<IPlayerModel | undefined> => {
  const players = await playerDatabase();
  let player: IPlayerModel | undefined = players.find((p) => p.id === id);

  return player;
}