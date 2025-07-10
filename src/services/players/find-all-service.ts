import { findAllPlayers }from "../../repositories/players/find-all-repository";
import { noContent, ok } from "../../utils/http-helpers/http-status-code";

export const getPlayersService = async () => {
  const data = await findAllPlayers();

  let response: any;

  if (data)
    response = await ok(data);
  else
    response = await noContent();

  return response;
}
