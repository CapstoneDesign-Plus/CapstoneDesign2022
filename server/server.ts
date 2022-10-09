
import App from './src/app';
import env from './src/config';

(async ()=> {
  await App.connectForWork(); // For DB Connect or Something need time
  const app = App.buildExpressApp();
  app.listen(env.PORT, ()=>{
    console.log("Server run!");
  })
})();