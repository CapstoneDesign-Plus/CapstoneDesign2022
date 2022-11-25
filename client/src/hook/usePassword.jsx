import { useState } from "react";
import CryptoJS from "crypto-js";
import sha256 from "../lib/sha256";

const usePassword = () => {
  const [password, setPassword] = useState("");

  return [
    password,
    setPassword,
    () => {
      return sha256(password);
    },
  ];
};

export default usePassword;
