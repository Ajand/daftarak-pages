import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  red: {
    fontFamily: "Javan",
    fontSize: "1.2em",
    textAlign: "center",
    background: "linear-gradient(110deg, #FC2C2A 35%, #FF524E 35%)",
    padding: theme.spacing(1),
    borderRadius: 100,
    border: "3px solid black",
  },
  yellow: {
    fontFamily: "Javan",
    fontSize: "1.2em",
    textAlign: "center",
    background: "linear-gradient(110deg, #E9B92E 35%, #F9DB00 35%)",
    padding: theme.spacing(1),
    borderRadius: 100,
    border: "3px solid black",
  },
  blue: {
    fontFamily: "Javan",
    fontSize: "1.2em",
    textAlign: "center",
    background: "linear-gradient(110deg, #FC2C2A 35%, #FF524E 35%)",
    padding: theme.spacing(1),
    borderRadius: 100,
    border: "3px solid black",
  },
}));

const Button = ({ children, buttonStyle, ...rest }) => {
  const classes = useStyles();

  const findButtonRoot = (buttonStyle) => {
    switch (buttonStyle) {
      case "yellow":
        return classes.yellow;
      default:
        return classes.red;
    }
  };

  return (
    <div {...rest} className={findButtonRoot(buttonStyle)}>
      {children}
    </div>
  );
};

export default Button;
