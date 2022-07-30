import { Application } from 'express';
import DBLoader from './database';
import ExpressLoader from './express';

export default async ({ app, useDB } : {app : Application, useDB : boolean}) => {
  if(useDB){
    const connection = await DBLoader();
    console.log('DB Initialized!');
  }
  await ExpressLoader({app});
  console.log('Express Initialized!');
}