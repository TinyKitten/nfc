import { atom } from "jotai";

export const validationAtom = atom({
  valid: false,
  hasError: false,
});
