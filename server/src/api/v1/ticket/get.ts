import validator from "@/middleware/validator";
import { invalidPermission, Permission, send } from "@/services/sender";
import TicketService from "@/services/ticket";
import translate from "@/services/translate";
import { TicketSearchOption } from "@/types/dto";
import { Router } from "express";

const router = Router();

router.post("/", ...validator.ticket_get, async (req, res) => {
  const ticket = await TicketService.getInstance().get(req.body["identifier"]);

  return send(res, ticket, ticket);
});

router.post("/search", async (req, res) => {
  if (!req.user || !req.user.certificated)
    return invalidPermission(res, Permission.ADMIN);

  const tickets = await TicketService.getInstance().search(
    req.body as TicketSearchOption
  );

  return send(res, tickets, translate.parseTicketDTOArray(tickets));
});

router.get("/list", async (req, res) => {
  if (!req.user || !req.user.certificated)
    return invalidPermission(res, Permission.ADMIN);

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

export default router;
