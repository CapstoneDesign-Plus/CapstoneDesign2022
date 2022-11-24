const koDtf = Intl.DateTimeFormat("ko", { dateStyle: "short" });

/**
 *
 * @param {number[]} utc
 */
export default function countDate(utc) {
  const res = {};

  utc.forEach((n) => {
    let value = koDtf.format(n);

    if (!res[value]) res[value] = 0;
    res[value]++;
  });

  return res;
}
