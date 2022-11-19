import { useState } from "react";
import CryptoJS from "crypto-js";

const usePassword = () => {
  const [password, setPassword] = useState("");

  return [
    password,
    setPassword,
    () => {
      return CryptoJS.SHA256(password).toString(CryptoJS.enc.Base64);
    },
  ];
};

export default usePassword;
