import { createPlayerReposiroty } from "../../repositories/players/create-repository";
import { badRequest, created } from "../../utils/http-helpers/http-status-code";
import { isObjectNullOrUndefinedOrEmpty } from "../../utils/object-null-undef-empry";

export const createPlayerService = async (playerRequest: any) => {
  if (isObjectNullOrUndefinedOrEmpty(playerRequest)) 
    return await badRequest({ message: "O jogador não pode ser nulo ou vazio" });

  const response = await createPlayerReposiroty(playerRequest);
  if (!response) return await badRequest(response);

  return await created(response);
}