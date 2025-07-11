import { createPlayerReposiroty } from "../../repositories/players/create-repository";
import { badRequest, created } from "../../utils/http-helpers/http-status-code";

export const createPlayerService = async (playerRequest: any) => {
  const response = await createPlayerReposiroty(playerRequest);

  if (response)
    return created(response);
  else
    return badRequest(response);
}