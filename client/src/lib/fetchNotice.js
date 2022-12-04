import paxios from "./paxios";

export default function fetchNotice(id) {
  return new Promise((resolve, reject) => {
    paxios.get(`/v1/notice/get/${id}`).then((v) => {
      if (v.data.ok) {
        resolve(v.data.result);
      } else {
        reject("No Notice");
      }
    });
  });
}
