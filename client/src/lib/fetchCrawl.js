import paxios from "./paxios";

export default function fetchCrawl() {
  return new Promise((resolve, reject) => {
    paxios.get(`/v1/diet/get/crawl`).then((v) => {
      if (v.data.ok) {
        resolve();
      } else {
        reject("no page");
      }
    });
  });
}
