import { Router } from "express";

import * as playersController from "../controllers/players-controller";
import * as clubsController from "../controllers/clubs-controller";

const router = Router();

router.get("/players", playersController.getPlayer);
router.get("/players/:id", playersController.getPlayerById);
router.post("/players", playersController.createPlayer);
router.put("/players/:id", playersController.updatePlayer);
router.delete("/players/:id", playersController.deletePlayer);

router.get("/clubs", clubsController.getClub);
router.get("/clubs/:id", clubsController.getClubById);
router.post("/clubs", clubsController.createClub);
router.put("/clubs/:id", clubsController.updateClub);
router.delete("/clubs/:id", clubsController.deleteClub);

export default router;