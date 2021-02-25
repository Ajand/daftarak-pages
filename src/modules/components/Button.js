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
    border: "3px solid #130A36",
    cursor: "pointer",
    color: "#130A36",
  },
  yellow: {
    fontFamily: "Javan",
    fontSize: "1.2em",
    textAlign: "center",
    background: "linear-gradient(110deg, #E9B92E 35%, #F9DB00 35%)",
    padding: theme.spacing(1),
    borderRadius: 100,
    border: "3px solid #130A36",
    cursor: "pointer",
    color: "#130A36",
  },
  blue: {
    fontFamily: "Javan",
    fontSize: "1.2em",
    textAlign: "center",
    background: "linear-gradient(110deg, #617be2 35%, #576fcb 35%)",
    padding: theme.spacing(1),
    borderRadius: 100,
    border: "3px solid #130A36",
    cursor: "pointer",
    color: "white",

  },
  purple: {
    fontFamily: "Javan",
    fontSize: "1.2em",
    textAlign: "center",
    background: "linear-gradient(110deg, #753EFE 35%,   #6630DE 35%)",
    padding: theme.spacing(1),
    borderRadius: 100,
    border: "3px solid #130A36",
    color: "white",
    cursor: "pointer",
  },
  green: {
    fontFamily: "Javan",
    fontSize: "1.2em",
    textAlign: "center",
    background: "linear-gradient(110deg, #479967 35%,   #4faa72 35%)",
    padding: theme.spacing(1),
    borderRadius: 100,
    border: "3px solid #130A36",
    color: "#130A36",
    cursor: "pointer",
  },
}));

const Button = ({ children, buttonStyle, ...rest }) => {
  const classes = useStyles();

  const findButtonRoot = (buttonStyle) => {
    switch (buttonStyle) {
      case "yellow":
        return classes.yellow;
      case "blue":
        return classes.blue;
      case "purple":
        return classes.purple;
      default:
        return classes.green;
    }
  };

  return (
    <div {...rest} className={findButtonRoot(buttonStyle)}>
      {children}
    </div>
  );
};

export default Button;
