import validator from "@/middleware/validator";
import { invalidPermission, Permission, send } from "@/services/sender";
import TokenService from "@/services/token";
import UserService from "@/services/user";
import { Router } from "express";

const router = Router();

router.put("/", ...validator.users_all_delete, async (req, res) => {
  if (!req.user || !req.user.certificated)
    return invalidPermission(res, Permission.ADMIN);

  let isSuccess = false;
  try {
    await UserService.getInstance().delete(req.body.ids);
    isSuccess = true;
  } catch {}
  return send(res, isSuccess);
});

router.put("/token", ...validator.token_all_delete, async (req, res) => {
  if (!req.user || !req.user.certificated)
    return invalidPermission(res, Permission.ADMIN);

  let isSuccess = false;
  try {
    await TokenService.getInstance().delete(req.body.ids);
    isSuccess = true;
  } catch {}
  return send(res, isSuccess);
});

export default router;
