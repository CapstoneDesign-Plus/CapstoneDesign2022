import paxios from "./paxios";

export default function tickets(identifier) {
  return new Promise((resolve, reject) => {
    paxios.post("/v1/ticket/get", { identifier }).then((v) => {
      if (v.data.ok) {
        resolve(v.data.result);
      }
    })
  })
}