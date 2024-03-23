import { atom } from "recoil";

export const winState = atom({
  key: "winnState",
  default: [false, ""],
});
