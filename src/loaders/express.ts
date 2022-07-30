import * as express from 'express';
import router from '@/routers';

export default async ({ app } : { app: express.Application }) => {
  app.use(express.json());
  app.use(express.urlencoded({extended : true}));
  app.use(router)
  //about router
}
