import paxios from "./paxios";

/**
 *
 * @param {number} id
 * @returns
 */
export default async function deleteNotice(id) {
  return new Promise((resolve, reject) => {
    paxios.delete(`/v1/notice/delete/${id}`).then((v) => {
      if (v.data.ok) {
        resolve();
      }
    });
  });
}
