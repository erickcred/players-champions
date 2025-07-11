import { IClubModel } from "../../models/club-model"
import { clubsDatabase } from "../clubs-database";

export const findAllClubs = async (): Promise<IClubModel[]> => {
  return await clubsDatabase();
}