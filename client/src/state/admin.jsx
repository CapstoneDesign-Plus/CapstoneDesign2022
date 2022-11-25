import { atom } from "recoil";

const adminState = atom({
  key: "adminState",
  default: false,
});

export default adminState;
