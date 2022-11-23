import paxios from "./paxios";

/**
 *
 * @param {number[]} ids
 * @returns
 */
export default async function deleteToken(ids) {
  return new Promise((resolve, reject) => {
    paxios
      .put("/v1/user/token", {
        ids,
      })
      .then((v) => {
        if (v.data.ok) {
          resolve();
        }
      });
  });
}
