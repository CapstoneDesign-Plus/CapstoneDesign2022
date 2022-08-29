import * as express from 'express';
import env from '@/config';
import router from '@/routers';
import passport from '@/middleware/passport';
import expressSession from 'express-session';
import cors from 'cors';


export default ({ app } : { app: express.Application }) => {
  app.use(express.json());
  app.use(express.urlencoded({extended : true}));
  app.use(cors());
  app.use(express.static(process.cwd() + '/react-public'));
  app.use(expressSession({
    secret: env.SESSION_SECRET,
    resave: true,
    saveUninitialized:true
  }))
  app.use(passport.initialize());
  app.use(passport.session());
  app.use((req, res, next)=>{
    console.log(`${req.method} - ${req.url}`);
    next();
  })
  app.use(router);
  //about router
}
