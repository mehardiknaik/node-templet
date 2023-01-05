import { Router } from "express";
const router = Router();

// Post Method

// Get Method

// Test API Routes
router.route("/test").all((req, res) => {
  const { body, method } = req;
  res.status(201).json({ method, data: JSON.stringify(body) });
});

export default router;
