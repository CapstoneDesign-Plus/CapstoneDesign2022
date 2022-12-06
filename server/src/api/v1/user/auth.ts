import passport from "@/middleware/passport";
import validator from "@/middleware/validator";
import { IUser } from "@/models/user";
import MailService from "@/services/mail";
import {
  invalidPermission,
  Permission,
  send,
  serverError,
} from "@/services/sender";
import TokenService from "@/services/token";
import translate from "@/services/translate";
import UserService from "@/services/user";
import { Router } from "express";

const router = Router();

router.get("/check", (req, res) => {
  if (!req.user) invalidPermission(res, Permission.USER);
  return send(res, true, translate.parseUserDTO(req.user as IUser));
});

router.post("/login", ...validator.user_login, (req, res, next) => {
  passport.authenticate("local-login", (err, user, info) => {
    if (err) return serverError(res, err);

    if (user) {
      req.logIn(user as Express.User, async (err) => {
        if (err) return next(err);

        const u = await UserService.getInstance().get(req.body["email"]);

        return send(res, true, translate.parseUserDTO(u as IUser));
      });
    } else {
      return send(res, false);
    }
  })(req, res, next);
});

router.get("/logout", (req, res) => {
  if (!req.user) return invalidPermission(res, Permission.USER);

  req.logout((err) => {
    if (err) return serverError(res, err);

    req.session.destroy(() => {});
    send(res, true);
  });
});

router.post("/signup", ...validator.user_signup, async (req, res) => {
  const isSuccess = await UserService.getInstance().signup(req.body);

  return send(res, isSuccess);
});

router.put(
  "/password",
  ...validator.user_put_reset_password,
  async (req, res) => {
    const decodedId = decodeURIComponent(req.query["token"] as string);

    const token = await TokenService.getInstance().get(decodedId);

    if (token && TokenService.isValid(token)) {
      const email = token.email;

      const npassword = req.body["new_password"] as string;

      await UserService.getInstance().setPassword(email, npassword);
    }

    return send(res, token);
  }
);

router.get(
  "/password/valid",
  ...validator.user_reset_password_valid,
  async (req, res) => {
    const decodedId = decodeURIComponent(req.query.token as string);

    const token = await TokenService.getInstance().get(decodedId);

    return send(res, token && TokenService.isValid(token));
  }
);

router.get(
  "/password",
  ...validator.user_get_reset_password,
  async (req, res) => {
    const email = req.query.email as string;

    const result = await TokenService.getInstance().create(email, 10);

    if (result) {
      const access_url = `http://bapsim.kro.kr/ResetPassword/${encodeURIComponent(result)}`;

      MailService.getInstance().sendMail(
        email,
        "[밥심] 비밀번호 재설정",
        `밥심 비밀번호를 변경하기 위해서 아래 링크를 눌러주세요:\n\n<a href="${access_url}">${access_url}</a>`
      );
    }

    return send(res, result);
  }
);
export default router;
