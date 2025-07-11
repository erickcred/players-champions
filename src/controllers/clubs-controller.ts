import { Request, Response } from "express";

import { IClubModel } from "../models/club-model";
import { createClubService } from "../services/clubs/create-service";
import { getClubsService } from "../services/clubs/find-all-service";
import { getClubByIdService } from "../services/clubs/find-byid-service";
import { updateClubService } from "../services/clubs/update-service";
import { deleteClubService } from "../services/clubs/delete-service";

export const getClub = async (req: Request, res: Response) => {
  const response = await getClubsService();
  
  res.status(response.statusCode).json(response.body);
};

export const getClubById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await getClubByIdService(parseInt(id));

  res.status(response.statusCode).json(response.body);
};

export const createClub = async (req: Request, res: Response) => {
  const clubRequest: IClubModel = req.body;
  const response = await createClubService(clubRequest);

  res.status(response.statusCode).json(response.body);
};

export const updateClub = async (req: Request, res: Response) => {
  const { id } = req.params;
  const clubRequest: IClubModel = req.body;
  const response = await updateClubService(parseInt(id), clubRequest);

  res.status(response.statusCode).json(response.body);
}

export const deleteClub = async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await deleteClubService(parseInt(id));

  res.status(response.statusCode).json(response.body);
}