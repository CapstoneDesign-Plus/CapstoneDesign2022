import paxios from "./paxios";

export default function fetchDiet() {
  return new Promise((resolve, reject) => {
    paxios.get(`/v1/diet/get`).then((v) => {
      if (v.data.ok) {
        resolve(v.data.result);
      }
    });
  });
}
