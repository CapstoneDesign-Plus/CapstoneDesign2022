
import App from './app';
import env from './config';

(async ()=> {
  await App.connectForWork(); // For DB Connect or Something need time
  const app = App.buildExpressApp();
  app.listen(env.PORT, ()=>{
    console.log("Server run!");
  })
})();