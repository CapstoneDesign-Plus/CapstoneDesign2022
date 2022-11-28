import { Request, Response, NextFunction, query } from "express";

import LogService from "@/services/log";

const TIME_OPTIONS: Intl.DateTimeFormatOptions = {
  dateStyle: 'short',
  timeStyle: 'short',
  hourCycle: 'h24'
}

export const logger = (req: Request, res: Response, next: NextFunction) => {
  let content: {params?: object, query?: object, body?: object} = {
    params: req.params,
    query: req.query,
    body: req.body
  };
  let contentStringified: string = JSON.stringify(content);

  LogService.getInstance().log(
    req.url,
    req.method,
    contentStringified,
    req.ip,
    req.user?.email || null,
    "info",
    "unknown",
  );
  console.log(
    `[${new Date().toLocaleString(undefined, TIME_OPTIONS)}] ${req.user?.email || "Guest"}(${req.ip}) ${req.method} ${req.url} with ${contentStringified || "None"}`
  );
  next();
}