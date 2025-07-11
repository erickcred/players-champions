import { IClubModel } from "../../models/club-model";
import { badRequest, noContent, notFound } from "../../utils/http-helpers/http-status-code";
import { updateClubRepository } from "../../repositories/clubs/update-repository";
import { isObjectNullOrUndefinedOrEmpty } from "../../utils/object-null-undef-empry";

export const updateClubService = async (id: number, clubRequest: IClubModel) => {
  if (isObjectNullOrUndefinedOrEmpty(clubRequest)) 
      return await badRequest({ message: "O club não pode ser nulo ou vazio" });

  if (isNaN(id)) return badRequest({ message: "Invalid id" });

  const response = await updateClubRepository(id, clubRequest);
  if (!response) return await notFound({ message: "Club not found" });

  return await noContent();
}