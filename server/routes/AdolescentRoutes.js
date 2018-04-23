import express from "express";
const router = express.Router();
import { listAll, show, create, update, remove } from "../controllers/AdolescentController.js";

router.get("/adolescent", listAll);
router.get("/adolescent/:id", show);
router.post("/adolescent", create);
router.put("/adolescent/:id", update);
router.delete("/adolescent/:id", remove);

export default router;