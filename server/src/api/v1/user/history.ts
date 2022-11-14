import { Router } from "express";
import { IUser } from "@/models/user";
import TicketService from "@/services/ticket";
import validator from "@/middleware/validator";
import { invalidPermission, Permission, send } from "@/services/sender";

const router = Router();

router.get("/:email", ...validator.user_history, async (req, res) => {
  if (!req.user) return invalidPermission(res, Permission.USER);

  const tickets = await TicketService.getInstance().getHistory(
    req.user as IUser,
    req.params.email as string
  );

  return send(res, tickets, tickets);
});

export default router;
