
import passport from "passport";
import { Strategy } from "passport-local";
import {UserService} from '@/services/user';
import User, { IUser } from '@/models/user';

passport.use('local-login', new Strategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true,
}, async (req, username, password, done)=> {
  console.log(`PASSPORT - ${username}`);

  const result = await new UserService(User).login({email: username, password: password});

  if(!result){
    return done(null, false);
  }

  return done(null, {
    email: username,
    password: password
  })
}));

passport.serializeUser((user, done)=>{
  console.log('AUTH SERIAL' + user.email);
  return done(null, user.email);
})

passport.deserializeUser(async (id, done)=>{
  const identifier = id as string;

  if(identifier){
    const user = await new UserService(User).get(identifier);
    if(user) done(null, user as Express.User);
  }else{
    done(null, false);
  }
})

export default passport;