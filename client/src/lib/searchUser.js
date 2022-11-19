import paxios from "./paxios";

/**
 * @typedef {object} UserSearchOption
 * @property {boolean} isEmail;
 * @property {boolean} isAdmin;
 * @property {boolean} isNickName;
 * @property {boolean} isPeriod;
 * @property {string} email;
 * @property {boolean} bvAdmin;
 * @property {string} nickName;
 * @property {number} startedAt;
 * @property {number} endAt;
 */

/**
 * @param {UserSearchOption} option
 * @returns
 */
export default function searchUser(option) {
  return new Promise((resolve) => {
    paxios
      .post("/v1/user/get/search", option)
      .then((v) => resolve(v.data.result));
  });
}
