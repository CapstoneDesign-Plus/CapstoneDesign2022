import "module-alias/register";

import loader from "./loaders";
import express from "express";
import env from "./config";

async function RunServer() {
  const app = express();

  const isTest = env.NODE_ENV === 'test';

  await loader.init({app, useDB : false});

  loader.listen({app : app, host: env.HOST, port: env.PORT});
}

RunServer();