import { Router } from "express";
import validator from "@/middleware/validator";
import UserService from "@/services/user";
import { IUser } from "@/models/user";

const router = Router();

router.put("/name", ...validator.user_change_name, async (req, res) => {
  if (!req.user) return res.status(400).send("<h1>Login Please.</h1>");

  await UserService.getInstance().changeUsername(
    req.user as IUser,
    req.query["new_name"] as string
  );

  return res.sendStatus(200);
});

router.put("/password", ...validator.user_change_password, async (req, res) => {
  if (!req.user) return res.redirect("/api/v1/user/login/web");

  const isSuccess = await UserService.getInstance().changePassword(
    req.user as IUser,
    req.body["old_password"],
    req.body["new_password"]
  );

  if (isSuccess) return res.sendStatus(200);

  return res.sendStatus(400);
});

export default router;
