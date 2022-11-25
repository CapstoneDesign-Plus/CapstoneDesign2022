import paxios from "./paxios";

export default function fetchCheck() {
  return new Promise((resolve, reject) => {
    paxios.get(`/v1/user/auth/check`).then((v) => {
      if (v.data.ok) resolve(v.data.result);
      else reject();
    });
  });
}
