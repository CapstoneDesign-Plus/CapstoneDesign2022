import sortDiet from "./sortDiet";

export default function changeDietShape(diet) {
  const sorted = sortDiet(diet);

  const keys = Object.keys(sorted[0].data);

  const res = {};

  keys.forEach((key) => {
    res[key] = sorted.reduce((acc, cur) => {
      acc.push(cur.data[key]);
      return acc;
    }, []);
  });

  return res;
}
