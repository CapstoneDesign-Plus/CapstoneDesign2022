import paxios from "./paxios";

/**
 *
 * @param {string} header
 * @param {string} title
 * @param {string} content
 */
export default async function updateNotice(
  identifier = 0,
  header = "",
  title = "",
  content = ""
) {
  return new Promise((resolve) => {
    paxios
      .put("/v1/notice/update", { identifier, header, title, content })
      .then((v) => {
        if (v.data.ok) {
          resolve();
        }
      });
  });
}
