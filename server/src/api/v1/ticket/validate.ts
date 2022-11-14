import validator from "@/middleware/validator";
import { send } from "@/services/sender";
import TicketService from "@/services/ticket";
import { Router } from "express";

const router = Router();

router.get("/", ...validator.ticket_validate, async (req, res) => {
  const isSuccess = await TicketService.getInstance().validate(
    req.body["identifier"]
  );

  return send(res, isSuccess);
});

export default router;
