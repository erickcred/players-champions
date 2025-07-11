import { findAllClubs }from "../../repositories/clubs/find-all-repository";
import { noContent, ok } from "../../utils/http-helpers/http-status-code";

export const getClubsService = async () => {
  const response = await findAllClubs();

  if (!response) return await noContent();
    
  return await ok(response);
}
