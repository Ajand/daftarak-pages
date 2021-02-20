import { makeVar } from "@apollo/client";

const currentGuest = makeVar(
  localStorage.getItem("current-guest")
    ? localStorage.getItem("current-guest")
    : null
);

const setCurrentGuest = (cg) => {
    localStorage.setItem("current-guest", cg)
    currentGuest(cg)
}

export { currentGuest, setCurrentGuest };
