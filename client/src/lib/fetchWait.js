import paxios from "./paxios";

export default function fetchWait() {
  return new Promise((resolve, reject) => {
    paxios.get(`v1/stats/wait`).then((v) => {
      if (v.data.ok) {
        resolve(v.data.result);
      }
    })
  })
}