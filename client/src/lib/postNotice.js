import paxios from "./paxios";

/**
 *
 * @param {string} header
 * @param {string} title
 * @param {string} content
 */
export default async function postNotice(
  header = "",
  title = "",
  content = ""
) {
  return new Promise((resolve) => {
    paxios.post("/v1/notice/post", { header, title, content }).then((v) => {
      if (v.data.ok) {
        resolve(v.data.result);
      }
    });
  });
}
