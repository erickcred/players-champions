import { findPlayerById } from "../../repositories/players/find-byid-repository";
import { badRequest, notFound, ok } from "../../utils/http-helpers/http-status-code";

export const getPlayerByIdService = async (id: number) => {
  if (isNaN(id)) return badRequest({ message: "Invalid id" });

  const response = await findPlayerById(id);
  if (!response) return await notFound({ message: "Player not found" });

  return await ok(response);
};