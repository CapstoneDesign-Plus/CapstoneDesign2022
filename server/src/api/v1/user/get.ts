import { Router } from "express";
import validator from "@/middleware/validator";
import UserService from "@/services/user";
import translate from "@/services/translate";
import { IUser } from "@/models/user";
import { invalidPermission, Permission, send } from "@/services/sender";
import { UserSearchOption } from "@/types/dto";

const router = Router();

router.post("/search", async (req, res) => {
  if (!req.user || !req.user.certificated)
    return invalidPermission(res, Permission.ADMIN);

  const users = await UserService.getInstance().search(
    req.body as UserSearchOption
  );

  return send(res, users, translate.parseUserDTOArray(users));
});

router.get("/list", async (req, res) => {
  if (!req.user || !req.user.certificated)
    return invalidPermission(res, Permission.ADMIN);

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

router.get("/is", ...validator.user_get_is, async (req, res) => {
  return send(
    res,
    await UserService.getInstance().isExist(req.query.email as string)
  );
});

router.get("/:email", ...validator.user_get, async (req, res) => {
  const user = await UserService.getInstance().get(req.params.email as string);

  return send(res, user, user && translate.parseUserDTO(user as IUser));
});

export default router;
