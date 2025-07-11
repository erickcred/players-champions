import { Request, Response } from "express";

import { IPlayerModel } from "../models/player-model";
import { createPlayerService } from "../services/players/create-service";
import { getPlayersService } from "../services/players/find-all-service";
import { getPlayerByIdService } from "../services/players/find-byid-service";
import { updatePlayerService } from "../services/players/update-service";
import { deletePlayerService } from "../services/players/delete-service";

export const getPlayer = async (req: Request, res: Response) => {
  const response = await getPlayersService();
  
  res.status(response.statusCode).json(response.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await getPlayerByIdService(parseInt(id));

  res.status(response.statusCode).json(response.body);
};

export const createPlayer = async (req: Request, res: Response) => {
  const playerRequest: IPlayerModel = req.body;
  const response = await createPlayerService(playerRequest);

  res.status(response.statusCode).json(response.body);
};

export const updatePlayer = async (req: Request, res: Response) => {
  const { id } = req.params;
  const playerRequest: IPlayerModel = req.body;
  const response = await updatePlayerService(parseInt(id), playerRequest);

  res.status(response.statusCode).json(response.body);
}

export const deletePlayer = async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await deletePlayerService(parseInt(id));

  res.status(response.statusCode).json(response.body);
}