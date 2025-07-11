import { IClubModel } from "../../models/club-model"
import { clubsDatabase } from "../clubs-database";

export const findClubById = async (id: number): Promise<IClubModel | undefined> => {
  let club: IClubModel | undefined = (await clubsDatabase()).find((c) => c.id === id);

  return club;
}