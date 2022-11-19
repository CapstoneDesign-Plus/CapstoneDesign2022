import paxios from "./paxios";

export default function fetchUser(page = 1, per = 30) {
  return new Promise((resolve) => {
    paxios
      .get(`/v1/user/get/list?page=${page}&per=${per}`)
      .then((v) => resolve(v.data.result.values));
  });
}
