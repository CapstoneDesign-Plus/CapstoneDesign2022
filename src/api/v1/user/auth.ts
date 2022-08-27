import passport from "@/middleware/passport";
import validator from "@/middleware/validator";
import UserService from "@/services/user";
import { Router } from "express";


const router = Router();

/**
 * @path {Post}
 */
router.post('/disposable', ...validator.user_login, async (req, res) => {
  const isSuccess = await UserService
    .getInstance()
    .login(
      req.body['email'],
      req.body['password']
    );

  if(isSuccess) return res.sendStatus(200);

  return res.sendStatus(400);
})

router.post('/login', ...validator.user_login, passport.authenticate('local-login', {
  successRedirect : '/loginSuc', 
  failureRedirect : '/loginFail', 
}));

router.post('/signup', ...validator.user_signup, async (req, res)=> {
  const isSuccess = await UserService
    .getInstance()
    .signup(req.body);

  if(isSuccess) return res.sendStatus(200);

  return res.sendStatus(400);
});

export default router;