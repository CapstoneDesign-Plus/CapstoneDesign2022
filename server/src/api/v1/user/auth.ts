import passport from "@/middleware/passport";
import validator from "@/middleware/validator";
import MailService from "@/services/mail";
import TokenService from "@/services/token";
import UserService from "@/services/user";
import { Router } from "express";

const router = Router();

router.get("/check", (req, res) => {
  if (req.user) return res.send(req.user);
  return res.sendStatus(400);
});

router.post("/logout", (req, res, next) => {
  req.logOut((err) => {
    if (err) return next(err);
    return res.redirect("/");
  });
});

router.post("/login", ...validator.user_login, (req, res, next) => {
  passport.authenticate("local-login", (err, user, info) => {
    if (err) return res.sendStatus(400);

    if (user) {
      req.logIn(user as Express.User, async (err) => {
        if (err) return next(err);

        const u = await UserService.getInstance().get(req.body["email"]);

        return res.json(u);
      });
    } else {
      return res.sendStatus(400);
    }
  })(req, res, next);
});

router.get("/logout", (req, res) => {
  if (!req.user) return res.sendStatus(400);

  req.logout((err) => {
    req.session.destroy(() => {});
    res.sendStatus(200);
  });
});

router.post("/signup", ...validator.user_signup, async (req, res) => {
  const isSuccess = await UserService.getInstance().signup(req.body);

  if (isSuccess) return res.sendStatus(200);

  return res.sendStatus(400);
});

router.put(
  "/password/:identifier",
  ...validator.user_put_reset_password,
  async (req, res) => {
    const decodedId = decodeURIComponent(req.params.identifier);

    const token = await TokenService.getInstance().get(decodedId);

    if (token && TokenService.isValid(token)) {
      const email = token.email;

      const npassword = req.body["new_password"] as string;

      await UserService.getInstance().setPassword(email, npassword);

      return res.sendStatus(200);
    }

    return res.sendStatus(400);
  }
);

router.get("/password/valid/:token", async (req, res) => {
  const decodedId = decodeURIComponent(req.params.token);

  const token = await TokenService.getInstance().get(decodedId);

  if (token && TokenService.isValid(token)) {
    return res.sendStatus(200);
  }

  return res.sendStatus(400);
});

router.get(
  "/password",
  ...validator.user_get_reset_password,
  async (req, res) => {
    const email = req.query.email as string;

    const result = await TokenService.getInstance().create(email, 10);

    if (result) {
      /**
       * @TODO url 수정 필요
       */
      const access_url = `http://bapsim.kro.kr/api/v1/auth/password/${encodeURIComponent(
        result
      )}`;

      MailService.getInstance().sendMail(
        email,
        "비밀번호 재설정",
        `<div>${access_url}</div>`
      );
    }

    return res.sendStatus(result ? 200 : 400);
  }
);
export default router;
