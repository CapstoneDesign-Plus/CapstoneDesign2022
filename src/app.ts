import "module-alias/register";

import loader from "./loaders";
import express from "express";
import env from "./config";

async function RunServer() {
  const app = express();

  await loader.init({app, useDB : true});

  app.listen(env.PORT, ()=> {
    console.log(`server run at http://${env.HOST}:${env.PORT}`);
  });
}

RunServer();