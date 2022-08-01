
import passport from "passport";
import { Strategy } from "passport-local";
import UserService from '@/services/user';
import User, { IUser } from '@/models/user';

passport.use('local-login', new Strategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true,
}, async (req, username, password, done)=> {
  console.log(`passport try local : ${username} ${password}`);

  const result = await new UserService(User).Login({email: username, password: password});

  if(!result){
    done(null, false);
  }

  return done(null, {
    email: username,
    password: password
  })
}));

passport.serializeUser((user, done)=>{
  console.log('se ' + user.email);
  done(null, user.email);
})

passport.deserializeUser(async (id, done)=>{
  const user = await new UserService(User).IsUser(id as string | null) as IUser;

  if(user) done(null, user as Express.User);

  console.log('de ' + user);

  done(null, false);
})

export default passport;