import { atom } from "recoil";

const textState = atom({
  key: "count", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export default textState;
