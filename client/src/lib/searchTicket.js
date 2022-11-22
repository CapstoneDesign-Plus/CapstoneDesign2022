import paxios from "./paxios";

/**
 * @typedef {object} TicketSearchOption
 * @property {boolean} isTClass
 * @property {boolean} isPrice
 * @property {boolean} isBuyer
 * @property {boolean} isOwner
 * @property {boolean} isCreatedPeriod
 * @property {boolean} isUsedPeriod
 * @property {"A" | "B" | "C"} tClass
 * @property {string} owner
 * @property {string} buyer
 * @property {number} createdStartedAt
 * @property {number} createdEndAt
 * @property {number} usedStartedAt
 * @property {number} usedEndAt
 * @property {number} startedPrice
 * @property {number} endPrice
 */

/**
 * @param {TicketSearchOption} option
 * @returns
 */
export default function searchTicket(option) {
  return new Promise((resolve) => {
    paxios
      .post("/v1/ticket/get/search", option)
      .then((v) => resolve(v.data.result));
  });
}
