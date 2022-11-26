const week = [-1, 0, 1, 2, 3, 4, -1];

export default function getToday() {
  return week[new Date().getDay()];
}
