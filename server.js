import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import router from "./src/router/route.js";
import ApiError from "./src/utils/ApiError.js";
import { errorConverter, errorHandler } from "./src/middlewares/error.js";
import logger from "./src/utils/logger.js";

//Env Config
dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");

const port = process.env.PORT || 8080;

// HTTP get Request
app.get("/", (req, res) => {
  res.status(200).json("Home GET Request");
});

// API routes
app.use("/api", router);

// Start Server
app
  .listen(port, () => {
    logger.info(`Server Connected to\x1b[93m http://localhost:${port}\x1b[0m`);
  })
  .on("error", (error) => {
    logger.error(
      `\x1b[31merror While starting Server...... ${error.code}\x1b[0m`
    );
  });

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(404, "Not found"));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);
