import { logger } from "@/middleware/logger";
import * as express from "express";
import env from "@/config";
import router from "@/routers";
import passport from "@/middleware/passport";
import expressSession from "express-session";
import cors from "cors";
import booleanHandler from "@/middleware/booleaner";

export default ({ app }: { app: express.Application }) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(
    expressSession({
      secret: env.SESSION_SECRET,
      resave: true,
      saveUninitialized: true,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(logger);
  app.use(booleanHandler as any);
  app.use(router);
  //about router
};
