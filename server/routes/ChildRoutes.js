import express from "express";
const router = express.Router();
import { listAll, show, create, update, remove } from "../controllers/ChildController.js";

router.get("/child", listAll);
router.get("/child/:id", show);
router.post("/child", create);
router.put("/child/:id", update);
router.delete("/child/:id", remove);

export default router;