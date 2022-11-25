import validator from "@/middleware/validator";
import { send } from "@/services/sender";
import TicketService from "@/services/ticket";
import { UsedTicketSearchRange } from "@/types/dto";
import { Router } from "express";

const router = Router();

router.get("/", ...validator.stats_day_used, async (req, res) => {
  const result = await TicketService.getInstance().getUsingRecord(
    req.query.range as UsedTicketSearchRange
  );

  return send(res, result, result);
});

export default router;
