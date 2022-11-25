const koDtf = Intl.DateTimeFormat("ko", { dateStyle: "short" });

/**
 *
 * @param {{  }[]} utc
 */
export default function countDate(data) {
  const res = {};

  Object.keys(data).forEach((c) => {
    data[c].forEach((n) => {
      let value = koDtf.format(n);

      if (!res[value])
        res[value] = {
          A: 0,
          B: 0,
          C: 0,
        };
      res[value][c]++;
    });
  });

  return res;
}
