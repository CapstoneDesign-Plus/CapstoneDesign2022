import paxios from "./paxios";

export default function fetchTicketCost() {
  return new Promise((resolve, reject) => {
    paxios.get('/v1/ticket/get/price').then((v) => {
      if (v.data.ok) {
        resolve(v.data.result);
      }
    })
  })
}