import express from "express";
const router = express.Router();
import { listAll, show, create, update, remove } from "../controllers/AdultController.js";

router.get("/adult", listAll);
router.get("/adult/:id", show);
router.post("/adult", create);
router.put("/adult/:id", update);
router.delete("/adult/:id", remove);

export default router;