import React from "react";
import { makeStyles } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  title: {
    fontSize: "1.5em",
    fontFamily: "Javan",
    flexGrow: 3,
    color: "#130A36",
    textAlign: "center",
  },
  iconContainer: {
    display: "flex",
    border: "3px solid #130A36",
    width: 30,
    height: 30,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    background: "#fafc80",
    marginLeft: theme.spacing(1),
    cursor: "pointer",
    color: "#130A36",
  },
}));

const Selector = ({ options, onChange, value }) => {
  const classes = useStyles();

  const nextItem = () => {
    return options.reduce((pv, cv, index) => {
      if (cv.name === value) {
        if (options.length <= index + 1) {
          onChange(options[0].name);
          return options[0].name;
        }
        onChange(options[index + 1].name);
        return options[index + 1].name;
      }
    }, null);
  };

  const backItem = () => {
    return options.reduce((pv, cv, index) => {
      if (cv.name === value) {
        if (index == 0) {
          onChange(options[options.length - 1].name);
          return options[options.length - 1].name;
        }
        onChange(options[index - 1].name);
        return options[index - 1].name;
      }
    }, null);
  };

  return (
    <div className={classes.root}>
      <div onClick={() => nextItem()} className={classes.iconContainer}>
        <ArrowForward />
      </div>
      <div className={classes.title}>
        {value
          ? options.find((item) => item.name === value).label
          : options[0].label}
      </div>
      <div onClick={() => backItem()} className={classes.iconContainer}>
        <ArrowBack />
      </div>
    </div>
  );
};

export default Selector;
