import paxios from "./paxios";

export default function logout() {
  return new Promise((resolve, reject) => {
    paxios.get("/v1/user/auth/logout").then((v) => {
      if (v.data.ok) {
        resolve(v.data.result);
      } else {
        reject("Fail");
      }
    });
  });
}
