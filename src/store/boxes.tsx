import { atom } from "recoil";

export const boxesState = atom({
  key: "boxesState",
  default: Array(9).fill(""),
});
