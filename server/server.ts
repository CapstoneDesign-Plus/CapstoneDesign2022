import App from "./src/app";
import env from "./src/config";

(async () => {
  await App.connectForWork(); // For DB Connect or Something need time
  const app = App.buildExpressApp();
  // 0.0.0.0은 ip를 ipv4로 읽기 위해
  app.listen(env.PORT, "0.0.0.0", () => {
    console.log("Server run!");
  });
})();
