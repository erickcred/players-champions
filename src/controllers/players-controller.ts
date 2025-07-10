import { Request, Response } from "express";
import { getPlayersService } from "../services/players/find-all-service";
import { getPlayerByIdService } from "../services/players/find-byid-service";

export const getPlayer = async (req: Request, res: Response) => {
  const response = await getPlayersService();
  
  res.status(response.statusCode).json(response.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await getPlayerByIdService(parseInt(id));

  res.status(response.statusCode).json(response.body);
}