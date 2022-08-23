import {Router} from 'express';
import UserService from '@/services/user';
import validator from '@/middleware/validator';
import passport from '@/middleware/passport';


const router = Router()

router.post('/', ...validator.user_login, async (req, res) => {
  const isSuccess = await UserService
    .getInstance()
    .login(req.body);

  if(isSuccess) return res.sendStatus(200);

  return res.sendStatus(400);
})

router.post('/web', ...validator.user_login, passport.authenticate('local-login', {
  successRedirect : '/loginSuc', 
  failureRedirect : '/loginFail', 
}));

router.get('/web', (req, res)=> {
  return res.send(`
  <html>
  <head>
    <title>Hello</title>
  </head>
  <body>
    <form action="/api/v1/user/login/web" method="post">
      <input type="text" name="email" id="">
      <input type="text" name="password" id="">
      <input type="submit" value="submit">
    </form>
  </body>
  
  </html>`);
})

export default router;
