import "module-alias/register";

import Loader from "./loaders";
import express from "express";
import env from "./config";

async function RunServer() {
  const app = express()

  await Loader({app, useDB : false})

  app.listen(env.PORT, ()=> {
    console.log(`server run at http://${env.HOST}:${env.PORT}`)
  })
}

RunServer();