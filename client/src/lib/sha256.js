import CryptoJS from "crypto-js";

export default function sha256(value = "") {
  return CryptoJS.SHA256(value).toString(CryptoJS.enc.Base64);
}
