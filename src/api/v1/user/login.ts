import {Router} from 'express';
import {UserService} from '@/services/user';
import validator from '@/middleware/validator';
import User from '@/models/user';
import passport from '@/middleware/passport';


const router = Router()

router.post('/', ...validator.login, async (req, res) => {
  const isSuccess = await new UserService(User).login(req.body);

  return res.json({isSuccess});
})

router.post('/web', ...validator.login, passport.authenticate('local-login', {
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
