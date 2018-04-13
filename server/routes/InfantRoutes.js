import express from "express";
const router = express.Router();
import { listAll, show, create, update, remove } from "../controllers/InfantController.js";

router.get("/infant", listAll);
router.get("/infant/:id", show);
router.post("/infant", create);
router.put("/infant/:id", update);
router.delete("/infant/:id", remove);

export default router;