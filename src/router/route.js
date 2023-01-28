import { Router } from "express";
import * as controller from '../controller/app.controller.js'
const router = Router();

// Post Method

// Get Method

// Test API Routes
router.route("/test").all(controller.test);

export default router;
