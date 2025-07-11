import { deletePlayerRepository } from "../../repositories/players/delete-repository";
import { badRequest, noContent, notFound } from "../../utils/http-helpers/http-status-code";

export const deletePlayerService = async (id: number) => {
  if (isNaN(id)) return badRequest({ message: "Invalid id" });

  const response = await deletePlayerRepository(id);
  if (!response) return await notFound({ message: "Player not found" });

  return await noContent();
}