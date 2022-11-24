import { atom } from "recoil";

const adminState = atom({
  key: "adminState",
  default: true,
});

export default adminState;
