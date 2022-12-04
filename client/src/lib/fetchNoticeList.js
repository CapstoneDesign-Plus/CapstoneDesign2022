import paxios from "./paxios";

export default function fetchNoticeList(page = 1, per = 30) {
  return new Promise((resolve, reject) => {
    paxios.get(`/v1/notice/get/list?page=${page}&per=${per}`).then((v) => {
      if (v.data.ok) {
        resolve(v.data.result);
      }
    });
  });
}
