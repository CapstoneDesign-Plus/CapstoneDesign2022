import validator from "@/middleware/validator";
import TicketService from "@/services/ticket";
import { UsedTicketSearchRange } from "@/types/dto";
import { Router } from "express";

const router = Router();

router.get("/", ...validator.stats_day_used, async (req, res) => {
  return await TicketService.getInstance().getUsingRecord(req.query.range as UsedTicketSearchRange); 
})

export default router;