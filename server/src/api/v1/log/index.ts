import LogService from "@/services/log";
import { invalidPermission, Permission, send } from "@/services/sender";
import translate from "@/services/translate";
import { LogSearchOption } from "@/types/dto";
import { Router } from "express";

const router = Router();

router.post("/search", async (req, res) => {
  if (!req.user || !req.user.certificated)
    return invalidPermission(res, Permission.ADMIN);

  const logs = await LogService.getInstance().search(
    req.body as LogSearchOption
  );

  return send(res, logs, translate.parseLogDTOArray(logs));
});

router.get("/list", async (req, res) => {
  if (!req.user || !req.user.certificated)
    return invalidPermission(res, Permission.ADMIN);

  const rangeResult = await LogService.getInstance().range(
    parseInt(req.query.page as string),
    parseInt(req.query.per as string)
  );

  return send(
    res,
    rangeResult,
    rangeResult && translate.parseLogRangeResult(rangeResult)
  );
});

export default router;
