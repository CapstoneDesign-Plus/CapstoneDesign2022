const seq = ["mon", "tue", "wed", "thr", "fri"];

export default function sortDiet(diet) {
  const res = [];
  seq.forEach((week) => res.push({ week, data: diet[week] }));
  return res;
}
