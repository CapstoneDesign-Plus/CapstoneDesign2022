import { Router } from "express";
import validator from "@/middleware/validator";
import UserService from "@/services/user";
import translate from "@/services/translate";
import { IUser } from "@/models/user";
import { invalidPermission, Permission, send } from "@/services/sender";

const router = Router();

router.get("/list", async (req, res) => {
  const rangeResult = await UserService.getInstance().range(
    parseInt(req.query.page as string),
    parseInt(req.query.per as string)
  );

  if (rangeResult) send(res, true, translate.parseUserRangeResult(rangeResult));

  return send(res, false);
});

router.get("/profile", async (req, res) => {
  if (!req.user) invalidPermission(res, Permission.USER);

  return send(res, true, translate.parseUserDTO(req.user as IUser));
});

router.get("/:email", ...validator.user_get, async (req, res) => {
  const user = await UserService.getInstance().get(req.params.email as string);

  return send(res, user, user && translate.parseUserDTO(req.user as IUser));
});

export default router;
