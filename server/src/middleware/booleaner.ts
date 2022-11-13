import { parseBoolean } from "@/utils/parseBoolean";
import { NextFunction } from "express";

export default function booleanHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (req.body) {
      parseBoolean(req.body);
    }
  } catch {
  } finally {
    next();
  }
}
