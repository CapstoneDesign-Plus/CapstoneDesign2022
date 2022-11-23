import validator from "@/middleware/validator";
import { invalidPermission, Permission, send } from "@/services/sender";
import TicketService from "@/services/ticket";
import { Router } from "express";

const router = Router();

router.delete("/", ...validator.ticket_all_delete, async (req, res) => {
  if (!req.user || !req.user.certificated)
    return invalidPermission(res, Permission.ADMIN);

  let isSuccess = false;
  try {
    await TicketService.getInstance().delete(req.body.ids);
    isSuccess = true;
  } catch {}
  return send(res, isSuccess);
});

export default router;
