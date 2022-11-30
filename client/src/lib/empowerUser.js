import paxios from "./paxios";

export default function empowerUser(user, isEmpower) {
  return new Promise((resolve, reject) => {
    paxios.put(`/v1/user/change/admin/${user}/${isEmpower}`).then((v) => {
      resolve(v.data.ok);
    });
  });
}
