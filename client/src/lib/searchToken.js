import paxios from "./paxios";

/**
 * @typedef {object} TokenSearchOption
 * @property {boolean} isCaller
 * @property {boolean} isCreatedPeriod
 * @property {boolean} isExpiredPeriod
 * @property {number} expiredStartedAt
 * @property {number} expiredEndAt
 * @property {number} createdStartedAt
 * @property {number} createdEndAt
 * @property {string} caller
 */

/**
 * @param {TokenSearchOption} option
 * @returns
 */
export default function searchToken(option) {
  return new Promise((resolve) => {
    paxios
      .post("/v1/user/token/search", option)
      .then((v) => resolve(v.data.result));
  });
}
