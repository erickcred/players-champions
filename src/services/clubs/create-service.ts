import { createClubReposiroty } from "../../repositories/clubs/create-repository";
import { badRequest, created } from "../../utils/http-helpers/http-status-code";
import { isObjectNullOrUndefinedOrEmpty } from "../../utils/object-null-undef-empry";

export const createClubService = async (clubRequest: any) => {
  if (isObjectNullOrUndefinedOrEmpty(clubRequest)) 
    return await badRequest({ message: "O club não pode ser nulo ou vazio" });

  const response = await createClubReposiroty(clubRequest);
  if (!response) return await badRequest(response);

  return await created(response);
}