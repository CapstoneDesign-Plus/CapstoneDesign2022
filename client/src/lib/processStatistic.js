const course = ["A", "B", "C"];

/**
 * @typedef {object} StatisticData
 * @property {"A" | "B" | "C"} tclass
 * @property {number} usedAt
 *
 * @param {StatisticData[]} data
 */
export default function processStatistic(data) {
  const res = {};

  course.forEach((c) => {
    res[c] = data.filter((d) => d.tclass === c).map((v) => v.usedAt);
  });

  return res;
}
