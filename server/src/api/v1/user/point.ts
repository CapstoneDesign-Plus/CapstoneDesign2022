import validator from "@/middleware/validator";
import { send } from "@/services/sender";
import UserService from "@/services/user";

import { Router } from "express";

const router = Router();

router.get("/", ...validator.user_point_give, async (req, res) => {
  let isSuccess = false;
  try {
    isSuccess = await UserService.getInstance().increasePoint(
      req.query["email"] as string,
      parseInt(req.query["delta"] as string)
    );
  } catch {}
  return send(res, isSuccess);
});

export default router;
