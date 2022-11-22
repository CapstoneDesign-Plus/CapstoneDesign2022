import paxios from "./paxios";

/**
 * @typedef {object} LogSearchOption
 * @property {boolean} isSource
 * @property {boolean} isPeriod
 * @property {boolean} isContent
 * @property {number} startedAt
 * @property {number} endAt
 * @property {string} source
 * @property {string} content
 */

/**
 * @param {LogSearchOption} option
 * @returns
 */
export default function searchLog(option) {
  return new Promise((resolve) => {
    paxios.post("/v1/log/search", option).then((v) => resolve(v.data.result));
  });
}
