import express from "express";
import {
  getSites,
  getSiteById,
  createSite,
  updateSite,
  deleteSite,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/sites", getSites);
router.get("/sites/:id", getSiteById);
router.post("/sites", createSite);
router.patch("/sites/:id", updateSite);
router.delete("/sites/:id", deleteSite);

export default router;
