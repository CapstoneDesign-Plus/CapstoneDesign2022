const week = ["none", "mon", "tue", "wed", "thr", "fri", "none"];

export default function getToday() {
  return week[new Date().getDay()];
}
