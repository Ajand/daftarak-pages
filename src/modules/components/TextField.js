import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { FocusWithin } from "react-focus-within";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "3px solid #130A36",
    borderRadius: theme.spacing(1),
    width: "100%",
    padding: theme.spacing(0.25),
    overflow: "hidden",
    boxSizing: "border-box",
    "&:focus-within": {
      border: "3px solid #617be2",
    },
    position: "relative",
    color: "#130A36",
  },
  label: {
    fontFamily: "Javan",
    fontSize: "1.5em",
    padding: theme.spacing(0.25),
    display: "inline-block",
  },
  disabledRoot: {
    border: "3px solid #888",
    borderRadius: theme.spacing(1),
    width: "100%",
    padding: theme.spacing(0.25),
    overflow: "hidden",
    boxSizing: "border-box",
    cursor: "not-allowed",
    "&:focus-within": {
      border: "3px solid #6D40D2",
    },
  },
  disabledLabel: {
    fontFamily: "Javan",
    fontSize: "1.5em",
    padding: theme.spacing(0.25),
    display: "inline-block",
    color: "#888",
    whiteSpace: "nowrap",
  },
  erroredRoot: {
    border: "3px solid #F76760",
    borderRadius: theme.spacing(1),
    width: "100%",
    padding: theme.spacing(0.25),
    overflow: "hidden",
    boxSizing: "border-box",
    cursor: "not-allowed",
  },
  erroredLabel: {
    fontFamily: "Javan",
    fontSize: "1.5em",
    padding: theme.spacing(0.25),
    display: "inline-block",
    color: "#F76760",
    whiteSpace: "nowrap",
  },
  input: {
    border: 0,
    fontSize: "1.5em",
    fontFamily: "Javan",
    display: "inline-block",
    padding: theme.spacing(0.25),

    outline: "0px !important",
  },
  inputContainer: {
    display: "flex",
  },
}));

const TextField = ({
  label,
  name,
  type = "text",
  disabled = false,
  helperText,
  error,
  value,
  onChange,
  ...rest
}) => {
  const classes = useStyles();


  if (disabled)
    return (
      <div className={classes.disabledRoot}>
        <div className={classes.inputContainer}>
          <label className={classes.disabledLabel} htmlFor={name}>
            {label}:
          </label>
          <input autoComplete="off" className={classes.input} disabled={true} />
        </div>
      </div>
    );

  return (
    <FocusWithin>
      {({ focusProps, isFocused }) => (
        <div className={classes.root}>
          <div className={classes.inputContainer}>
            <label className={classes.label} htmlFor={name}>
              {label}:
            </label>
            <input
              autoComplete="off"
              className={classes.input}
              name={name}
              type={type}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              {...rest}
            />
          </div>
          <div className={error ? classes.errorHelperText : classes.helperText}>
            {helperText}
          </div>
        </div>
      )}
    </FocusWithin>
  );
};

export default TextField;
