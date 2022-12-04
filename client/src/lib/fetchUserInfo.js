import paxios from "./paxios";

/**
 *
 * @param {string} email
 * @returns
 */

export default function fetchUserInfo(email) {
  return new Promise((resolve, reject) => {
    paxios.get(`/v1/user/get/` + email).then((v) => {
      if (v.data.ok) {
        resolve(v.data.result);
      }
    });
  });
}
