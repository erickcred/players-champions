import { findClubById } from "../../repositories/clubs/find-byid-repository";
import { badRequest, notFound, ok } from "../../utils/http-helpers/http-status-code";

export const getClubByIdService = async (id: number) => {
  if (isNaN(id)) return badRequest({ message: "Invalid id" });

  const response = await findClubById(id);
  if (!response) return await notFound({ message: "Club not found" });

  return await ok(response);
};