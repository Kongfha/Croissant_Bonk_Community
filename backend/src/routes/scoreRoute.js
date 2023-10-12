import express from "express";

import * as scoreController from "../controllers/scoreController.js";

const router = express.Router();

router.post("/",scoreController.createScore);
router.get("/",scoreController.getScore);
router.put("/",scoreController.updateScore);

export default router;