
import App from './app';
import env from './config';

(async ()=> {
  const app = App.buildExpressApp();
  // await App.connectForWork(); // For DB Connect or Something need time
  app.listen(env.PORT, ()=>{
    console.log("Server run!");
  })
})();