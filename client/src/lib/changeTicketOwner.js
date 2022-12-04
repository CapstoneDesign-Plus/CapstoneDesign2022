import paxios from "./paxios";

/**
 * @param {string} identifier
 * @param {string} to
 * @returns
 */
export default async function changeTicketOwner(identifier, to) {
  return new Promise((resolve, reject) => {
    paxios.put("v1/ticket/change/owner", { identifier, to }).then((v) => {
      resolve(v.data);
    })
  })
}