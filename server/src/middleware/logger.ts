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

  LogService.getInstance().log(
    req.url,
    req.method,
    JSON.stringify(content),
    "info",
    "unknown",
    req.user?.email || null
  );
  console.log(
    `[${new Date().toLocaleString(undefined, TIME_OPTIONS)}] ${req.user?.email || "Guest"} ${req.method} ${req.url} with ${content || "None"}`
  );
  next();
}