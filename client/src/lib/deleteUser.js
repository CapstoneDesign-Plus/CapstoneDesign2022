import paxios from "./paxios";

/**
 *
 * @param {string[]} ids
 * @returns
 */
export default async function deleteUser(ids) {
  return new Promise((resolve, reject) => {
    paxios
      .put("/v1/user/delete", {
        ids,
      })
      .then((v) => {
        if (v.data.ok) {
          resolve();
        }
      });
  });
}
