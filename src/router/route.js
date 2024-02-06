import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../swagger.json" assert { type: "json" };
import systmeRoutes from "./system.route.js";
const router = Router();

router.use(systmeRoutes);

if (process.env.NODE_ENV == "development") {
  router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

export default router;
