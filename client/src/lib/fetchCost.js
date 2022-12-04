import paxios from "./paxios";

export default function fetchCost() {
  return new Promise((resolve, reject) => {
    paxios.get(`v1/ticket/get/price`).then((v) => {
      if (v.data.ok) {
        resolve(v.data.result);
        //console.log(v.data);
      }
    })
  })
}