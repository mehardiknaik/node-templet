import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import morgan from "morgan";
import router from "./src/router/route.js";

//Env Config
dotenv.config()

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");

const port = process.env.PORT || 8080;

// HTTP get Request
app.get("/", (req, res) => {
  res.status(201).json("Home GET Request");
});

// API routes
app.use("/api", router);

// Start Server
app.listen(port, () => {
  console.log(`Server Connected to\x1b[93m http://localhost:${port}\x1b[0m`);
});

// Error Handler
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const code = error.status || 500
  const response = {
    code,
    message: error.message,
  }
  res.status(code).send(response);
});