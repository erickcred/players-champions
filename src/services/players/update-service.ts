import { IPlayerModel } from "../../models/player-model";
import { badRequest, noContent, notFound } from "../../utils/http-helpers/http-status-code";
import { updatePlayerRepository } from "../../repositories/players/update-repository";
import { isObjectNullOrUndefinedOrEmpty } from "../../utils/object-null-undef-empry";

export const updatePlayerService = async (id: number, playerRequest: IPlayerModel) => {
  if (isObjectNullOrUndefinedOrEmpty(playerRequest)) 
      return await badRequest({ message: "O jogador não pode ser nulo ou vazio" });

  if (isNaN(id)) return badRequest({ message: "Invalid id" });

  const response = await updatePlayerRepository(id, playerRequest);
  if (!response) return await notFound({ message: "Player not found" });

  return await noContent();
}