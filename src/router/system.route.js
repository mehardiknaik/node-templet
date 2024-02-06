import { Router } from "express";
import * as controller from "../controller/system.controller.js";

const router = Router();

// Test API Routes
router.route("/test").all(controller.test);

// Get Method
router.get("/healthCheck", controller.healthCheck);

export default router;
