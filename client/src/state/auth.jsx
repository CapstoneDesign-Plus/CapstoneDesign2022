import { atom } from "recoil";

const authState = atom({
  key: "authState",
  default: null,
});

export default authState;
