import paxios from "./paxios";
/**
 *
 * @typedef {"7d" | "30d" | "3m" | "1y"} StatisticRangeType
 *
 * @param {StatisticRangeType} type
 * @returns
 */
export default function fetchStatistic(type = "7d") {
  return new Promise((resolve, reject) => {
    paxios.get(`/v1/stats?range=${type}`).then((v) => {
      if (v.data.ok) {
        resolve(v.data.result);
      }
    });
  });
}
