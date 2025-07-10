import { Request, Response } from "express";

export const getPlayer = async (req: Request, res: Response) => {
  res.status(200);
  res.json({ player: "Messi" });
};