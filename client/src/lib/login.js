import paxios from "./paxios";

export default function login(id, pw) {
  return new Promise((resolve, reject) => {
    paxios
      .post(
        "/v1/user/auth/login",
        { email: id, password: pw },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((v) => {
        resolve(v.data);
      });
  });
}
