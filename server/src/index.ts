import express from "express";
import dotenv from "dotenv";
import { httpLogger, logger } from "./configs/pino.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(httpLogger);

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
