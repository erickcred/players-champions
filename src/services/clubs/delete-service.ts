import { deleteClubRepository } from "../../repositories/clubs/delete-repository";
import { badRequest, noContent, notFound } from "../../utils/http-helpers/http-status-code";

export const deleteClubService = async (id: number) => {
  if (isNaN(id)) return badRequest({ message: "Invalid id" });

  const response = await deleteClubRepository(id);
  if (!response) return await notFound({ message: "Club not found" });

  return await noContent();
}