import App from "./src/app";
import env from "./src/config";
import https from "https";
import fs from "fs";

(async () => {
  await App.connectForWork(); // For DB Connect or Something need time
  const app = App.buildExpressApp();

  const option = {
    key: fs.readFileSync(__dirname + "/cert/private.key"),
    cert: fs.readFileSync(__dirname + "/cert/certificate.crt"),
    ca: fs.readFileSync(__dirname + "/cert/ca_bundle.crt"),
  };

  https.createServer(option, app).listen(env.PORT, () => {
    console.log("run!");
  });
})();
