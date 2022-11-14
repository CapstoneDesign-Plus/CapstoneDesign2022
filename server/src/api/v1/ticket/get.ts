import validator from "@/middleware/validator";
import { send } from "@/services/sender";
import TicketService from "@/services/ticket";
import translate from "@/services/translate";
import { TicketSearchOption } from "@/types/dto";
import { Router } from "express";

const router = Router();

router.post("/", ...validator.ticket_get, async (req, res) => {
  const ticket = await TicketService.getInstance().get(req.body["identifier"]);

  return send(res, ticket, ticket);
});

router.get("/search", async (req, res) => {
  const tickets = await TicketService.getInstance().search(
    req.body as TicketSearchOption
  );

  return send(res, tickets, tickets);
});

router.get("/list", async (req, res) => {
  const rangeResult = await TicketService.getInstance().range(
    parseInt(req.query.page as string),
    parseInt(req.query.per as string)
  );

  return send(
    res,
    rangeResult,
    rangeResult && translate.parseTicketRangeResult(rangeResult)
  );
});

/**
 * @todo Search
 */

router.get("/search", async (req, res) => {
  return send(res, false);
});

export default router;
