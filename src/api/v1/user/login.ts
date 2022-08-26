import {Router} from 'express';
import UserService from '@/services/user';
import validator from '@/middleware/validator';
import passport from '@/middleware/passport';


const router = Router()

router.post('/confirm', ...validator.user_login, async (req, res) => {
  const isSuccess = await UserService
    .getInstance()
    .login(
      req.body['email'],
      req.body['password']
    );

  if(isSuccess) return res.sendStatus(200);

  return res.sendStatus(400);
})

router.post('/', ...validator.user_login, passport.authenticate('local-login', {
  successRedirect : '/loginSuc', 
  failureRedirect : '/loginFail', 
}));

export default router;
