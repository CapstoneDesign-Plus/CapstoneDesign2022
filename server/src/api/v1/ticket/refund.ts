import validator from "@/middleware/validator";
import { IUser } from "@/models/user";
import { invalidPermission, Permission, send } from "@/services/sender";
import TicketService from "@/services/ticket";
import { Router } from "express";

const router = Router();

router.delete("/", ...validator.ticket_refund, async (req, res) => {
  if (!req.user) return invalidPermission(res, Permission.USER);

  const isSuccess = await TicketService.getInstance().refund(
    req.user as IUser,
    req.body["identifier"]
  );

  return send(res, isSuccess);
});

export default router;
