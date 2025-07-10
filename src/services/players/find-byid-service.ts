import { findPlayerById } from "../../repositories/players/find-byid-repository";
import { noContent, ok } from "../../utils/http-helpers/http-status-code";

export const getPlayerByIdService = async (id: number) => {
  const data = await findPlayerById(id);

  let response: any;

  if (data)
    response = await ok(data);
  else
    response = await noContent();

  return response;
};