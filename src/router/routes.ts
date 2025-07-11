import { Router } from "express";

import * as playersController from '../controllers/players-controller';

const router = Router();

router.get("/players", playersController.getPlayer);
router.get("/players/:id", playersController.getPlayerById);
router.post("/players", playersController.createPlayer);
router.put("/players/:id", playersController.updatePlayer);
router.delete("/players/:id", playersController.deletePlayer);

export default router;