import "module-alias/register";
import expressLoader from "./loaders/express";
import dbConnect from "./loaders/database";
import express from "express";

export default {
  buildExpressApp(){
    const app = express();
    expressLoader({app});
    return app;
  },
  async connectForWork(){
    return await dbConnect();
  }
}