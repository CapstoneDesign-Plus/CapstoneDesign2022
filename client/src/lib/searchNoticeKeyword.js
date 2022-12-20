import paxios from "./paxios";

/**
 * @typedef {object} UserSearchOption
 * @property {boolean} isKeyword
 * @property {boolean} isHeader
 * @property {boolean} isWriter
 * @property {boolean} isPeriod
 * @property {boolean} keyword
 * @property {boolean} header
 * @property {boolean} writer
 * @property {boolean} startedAt
 * @property {boolean} endAt
 */

/**
 * @param {string} keyword
 * @returns
 */
export default function searchNoticeKeyword(keyword = "") {
  return new Promise((resolve) => {
    paxios
      .post("/v1/notice/get/search", {
        isKeyword: keyword.length > 0,
        isHeader: false,
        isWriter: false,
        isPeriod: false,
        keyword,
      })
      .then((v) => resolve(v.data.result));
  });
}
