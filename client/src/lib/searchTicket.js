import paxios from "./paxios";

/**
 * @typedef {object} TicketSearchOption
 * @property {boolean} isTClass
 * @property {boolean} isPrice
 * @property {boolean} isBuyer
 * @property {boolean} isOwner
 * @property {boolean} isCreatePeriod
 * @property {boolean} isExpiredPeriod
 * @property {"A" | "B" | "C"} tClass
 * @property {string} owner
 * @property {string} buyer
 * @property {number} createStartedAt
 * @property {number} createEndAt
 * @property {number} expiredStartedAt
 * @property {number} expiredEndAt
 * @property {number} startedPrice
 * @property {number} endPrice
 */

/**
 * @param {TicketSearchOption} option
 * @returns
 */
export default function searchUser(option) {
  return new Promise((resolve) => {
    paxios
      .post("/v1/ticket/get/search", option)
      .then((v) => resolve(v.data.result));
  });
}
