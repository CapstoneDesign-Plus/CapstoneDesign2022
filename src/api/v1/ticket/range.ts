import { Router } from "express";
import TicketService from "@/services/ticket";
import translate from "@/services/translate";

const router = Router();

router.get('/', async (req, res) => {
  const rangeResult = await TicketService
    .getInstance()
    .range(
      parseInt(req.query.page as string),
      parseInt(req.query.per as string)
    );

  if(rangeResult) return res.json(
    translate.parseTicketRangeResult(rangeResult)
  );

  return res.sendStatus(400);
})

export default router;