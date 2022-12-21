import paxios from "./paxios";

export default function createTicket(owner, tclass) {
  return new Promise((resolve, reject) => {
    paxios.post("v1/ticket/create", { owner, tclass }).then((v) => {
      // if (v.data.ok) {
      //   resolve(v.data.result);
      // }
      // else 
      resolve(v.data.ok);
    });
  });
}