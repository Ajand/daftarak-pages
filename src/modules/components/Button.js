import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  red: {
    fontFamily: "Javan",
    fontSize: "1.2em",
    textAlign: "center",
    background: "linear-gradient(110deg, #FC2C2A 35%, #FF524E 35%)",
    padding: theme.spacing(0.75),
    borderRadius: 100,
    border: "3px solid #130A36",
    cursor: "pointer",
    color: "#130A36",
  },
  yellow: {
    fontFamily: "Javan",
    fontSize: "1.2em",
    textAlign: "center",
    background: "linear-gradient(110deg, #f8df6d 35%, #f9e58a 35%)",
    padding: theme.spacing(0.75),
    borderRadius: 100,
    border: "3px solid #130A36",
    cursor: "pointer",
    color: "#130A36",
  },
  blue: {
    fontFamily: "Javan",
    fontSize: "1.2em",
    textAlign: "center",
    background: "linear-gradient(110deg, #48d1d5 35%,   #71e9c7 35%)",
    padding: theme.spacing(0.75),
    borderRadius: 100,
    border: "3px solid #130A36",
    cursor: "pointer",
    color: "black",

  },
  purple: {
    fontFamily: "Javan",
    fontSize: "1.2em",
    textAlign: "center",
    background: "linear-gradient(110deg, #753EFE 35%,   #6630DE 35%)",
    padding: theme.spacing(0.75),
    borderRadius: 100,
    border: "3px solid #130A36",
    color: "white",
    cursor: "pointer",
  },
  green: {
    fontFamily: "Javan",
    fontSize: "1.2em",
    textAlign: "center",
    background: "linear-gradient(110deg, #48d1d5 35%,   #71e9c7 35%)",
    padding: theme.spacing(0.75),
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
