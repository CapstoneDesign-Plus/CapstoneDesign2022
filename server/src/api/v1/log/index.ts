import LogService from "@/services/log";
import { send } from "@/services/sender";
import translate from "@/services/translate";
import { LogSearchOption } from "@/types/dto";
import { Router } from "express";

const router = Router();

router.post("/search", async (req, res) => {
  const logs = await LogService.getInstance().search(
    req.body as LogSearchOption
  );

  return send(res, logs, translate.parseLogDTOArray(logs));
});

router.get("/list", async (req, res) => {
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
