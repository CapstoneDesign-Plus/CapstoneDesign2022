import paxios from "./paxios";

/**
 *
 * @param {string} identifier
 * @returns
 */
export default async function deleteRefund(identifier) {
  return new Promise((resolve, reject) => {
    paxios.delete(`/v1/ticket/refund?id=${identifier}`).then((v) => {
      if (v.data.ok) {
        resolve();
      }
    });
  });
}
