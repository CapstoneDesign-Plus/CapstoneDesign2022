import { Request, Response, NextFunction } from "express";

import LogService from "@/services/log";

const OPTIONS: Intl.DateTimeFormatOptions = {
  dateStyle: 'short',
  timeStyle: 'short',
  hourCycle: 'h24'
}

export const logger = (req: Request, res: Response, next: NextFunction) => {
  let content: string;
  if (req.user)
    content = `${req.user.username}(${req.user.email}) ${req.method} ${req.url}`;
  else
    content = `Guest ${req.ip} ${req.method} ${req.url}`;
  LogService.getInstance().log(req.url, content);
  console.log(`[${new Date().toLocaleString(undefined, OPTIONS)}] ${content}`);
  next();
}