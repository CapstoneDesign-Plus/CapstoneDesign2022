import { Application } from 'express';
import DBLoader from './database';
import ExpressLoader from './express';

export default {
  async init({ app, useDB } : {app : Application, useDB : boolean}) {
    if(useDB){
      const connection = await DBLoader();
      console.log('DB Initialized!');
    }
    await ExpressLoader({app});
    console.log('Express Initialized!');
  },

  async listen({app, host, port} : { app : Application, host: string, port: number}) {
    app.listen(port, ()=>{
      console.log(`run at http://${host}:${port}`);
    });
  }
}