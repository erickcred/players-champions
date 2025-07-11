import { findAllPlayers }from "../../repositories/players/find-all-repository";
import { noContent, ok } from "../../utils/http-helpers/http-status-code";

export const getPlayersService = async () => {
  const response = await findAllPlayers();

  if (!response) return await noContent();
    
  return await ok(response);
}
