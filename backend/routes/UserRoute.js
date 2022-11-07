import express from "express";
import {
  getSites,
  getSiteById,
  createSite,
  updateSite,
  deleteSite,
} from "../controllers/UserController.js";

import {
  getLines,
  getLineById,
  getLineBySite,
  createLine,
  updateLine,
  deleteLine,
} from "../controllers/LineController.js";

import {
  getTickets,
  getTicketById,
  getTicketByLine,
  createTicket,
  updateTicket,
  deleteTicket,
} from "../controllers/IncidentController.js";

const router = express.Router();

router.get("/sites", getSites);
router.get("/sites/:id", getSiteById);
router.post("/sites", createSite);
router.patch("/sites/:id", updateSite);
router.delete("/sites/:id", deleteSite);

router.get("/lines", getLines);
router.get("/lines/:id", getLineById);
router.get("/lines/:id", getLineBySite);
router.post("/lines", createLine);
router.patch("/lines/:id", updateLine);
router.delete("/lines/:id", deleteLine);

router.get("/incidents", getTickets);
router.get("/incidents/:id", getTicketById);
router.get("/incidents/:id", getTicketByLine);
router.post("/incidents", createTicket);
router.patch("/incidents/:id", updateTicket);
router.delete("/incidents/:id", deleteTicket);

export default router;
