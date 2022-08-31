import passport from "@/middleware/passport";
import validator from "@/middleware/validator";
import UserService from "@/services/user";
import { Router } from "express";


const router = Router();

router.post('/login', ...validator.user_login, (req, res, next)=> {
  passport.authenticate('local-login', (err, user, info)=>{
    if(err) return res.sendStatus(400);

    if(user) {
      req.logIn(user as Express.User, (err)=>{
        if(err) return next(err);

        return res.json(user);
      })
    }else{
      return res.sendStatus(400);
    }

  })(req, res, next);
});

router.post('/signup', ...validator.user_signup, async (req, res)=> {
  const isSuccess = await UserService
    .getInstance()
    .signup(req.body);

  if(isSuccess) return res.sendStatus(200);

  return res.sendStatus(400);
});

export default router;