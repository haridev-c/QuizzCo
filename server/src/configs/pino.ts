import { pino } from "pino";
import { pinoHttp } from "pino-http";

export const httpLogger = pinoHttp();

export const logger = pino({
  transport: {
    targets: [{ target: "pino-pretty" }],
  },
});
