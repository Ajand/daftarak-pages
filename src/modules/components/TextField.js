import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "3px solid black",
    borderRadius: theme.spacing(1),
    width: "100%",
    padding: theme.spacing(0.25),
    overflow: "hidden",
    boxSizing: "border-box",
    "&:focus-within": {
      border: "3px solid #6D40D2",
    },
  },
  label: {
    fontFamily: "Javan",
    fontSize: "2em",
    padding: theme.spacing(0.25),
    display: "inline-block",
  },
  input: {
    border: 0,
    fontSize: "2em",
    fontFamily: "Javan",
    display: "inline-block",
    padding: theme.spacing(0.25),

    outline: "0px !important",
  },
  inputContainer: {
    display: "flex",
  },
}));

const TextField = ({ label, name, type = "text", disabled = false }) => {
  const classes = useStyles();

  const [value, setValue] = useState("");

  if(disabled) (
    <div className={classes.disabledRoot}>
      <div className={classes.disabledContainer}>
        <label className={classes.disabledLabel} htmlFor={name}>
          {label}:
        </label>
        <input
          className={classes.input}
          disabled={true}
        />
      </div>
    </div>
  )

  return (
    <div className={classes.root}>
      <div className={classes.inputContainer}>
        <label className={classes.label} htmlFor={name}>
          {label}:
        </label>
        <input
          className={classes.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name={name}
          type={type}
        />{" "}
      </div>
    </div>
  );
};

export default TextField;
