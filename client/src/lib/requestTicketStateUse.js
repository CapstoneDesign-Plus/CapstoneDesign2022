import paxios from "./paxios";

// 0 - wait, 1 - use
export default function requestTicketStateUse(type, value) {
  return new Promise((resolve) => {
    paxios.get(`/v1/ticket/use/${type}?id=${value}`).then((v) => {
      resolve(v.data.trim() === "T");
    });
  });
}
