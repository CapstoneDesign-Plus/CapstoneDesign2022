import paxios from "./paxios";

export default function updateTicketPrice(type, price) {
  return new Promise((resolve, reject) => {
    paxios.put(`/v1/ticket/change/price/${type}/${price}`).then((v) => {
      resolve(v.data.ok);
    });
  });
}
