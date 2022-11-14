import { Router } from "express";
import validator from "@/middleware/validator";
import UserService from "@/services/user";
import { IUser } from "@/models/user";
import { invalidPermission, Permission, send } from "@/services/sender";

const router = Router();

router.put("/name", ...validator.user_change_name, async (req, res) => {
  if (!req.user) return invalidPermission(res, Permission.USER);

  await UserService.getInstance().changeUsername(
    req.user as IUser,
    req.query["new_name"] as string
  );

  return send(res, true);
});

router.put("/password", ...validator.user_change_password, async (req, res) => {
  if (!req.user) return invalidPermission(res, Permission.USER);

  const isSuccess = await UserService.getInstance().changePassword(
    req.user as IUser,
    req.body["old_password"],
    req.body["new_password"]
  );

  return send(res, isSuccess);
});

export default router;
