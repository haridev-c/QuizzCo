import express from "express";
import dotenv from "dotenv";
import { toNodeHandler } from "better-auth/node";
import { httpLogger, logger } from "./configs/pino.js";
import { auth } from "./utils/auth.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.all("/api/auth/{*any}", toNodeHandler(auth));
app.use(httpLogger);
app.use(express.json());

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
