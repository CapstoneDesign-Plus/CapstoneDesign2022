import * as express from 'express';
import env from '@/config';
import router from '@/routers';
import passport from '@/middleware/passport';
import expressSession from 'express-session';


export default ({ app } : { app: express.Application }) => {
  app.use(express.json());
  app.use(express.urlencoded({extended : true}));
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
  router.use((req, res, next)=>{
    return res.status(404).send('<h1>No Page</h1>');
  })
  //about router
}
