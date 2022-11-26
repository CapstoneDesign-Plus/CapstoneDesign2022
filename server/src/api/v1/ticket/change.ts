import validator from "@/middleware/validator";
import TicketService from "@/services/ticket";
import { Router } from "express";
import { IUser } from "@/models/user";
import { invalidPermission, Permission, send } from "@/services/sender";
import StoreService from "@/services/store";
import { TicketClass } from "@/types/dto";

const router = Router();

router.put("/state", ...validator.ticket_change_state, async (req, res) => {
  await TicketService.getInstance().changeState(
    req.body["identifier"],
    req.body["state"]
  );
  return send(res, true);
});

router.put("/owner", ...validator.ticket_assign, async (req, res) => {
  if (!req.user) return invalidPermission(res, Permission.USER);

  const isSuccess = await TicketService.getInstance().assign(
    req.user as IUser,
    req.body["identifier"],
    req.body["to"]
  );
  return send(res, isSuccess);
});

router.put(
  "/price/:type/:price",
  ...validator.ticket_price_update,
  (req, res) => {
    let success = false;
    const type = req.params["type"];

    if ((success = ["A", "B", "C"].indexOf(type) > -1)) {
      StoreService.getInstance().setPrice(
        type as TicketClass,
        parseInt(req.params.price)
      );
    }

    return send(res, success, StoreService.getInstance().getTable());
  }
);

export default router;
