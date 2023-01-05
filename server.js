import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./router/route.js";

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");

const port = 8080;

// HTTP get Request
app.get("/", (req, res) => {
  res.status(201).json("Home GET Request");
});

// API routes
app.use("/api", router);

// Start Server
app.listen(port, () => {
  console.log(`Server Connected to http://localhost:${port}`);
});
