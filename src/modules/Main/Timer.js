import React from "react";
import { makeStyles, ButtonBase, Paper, Grow } from "@material-ui/core";
import PN from "persian-number";
import Clock from "./Clock";

import { ReactComponent as Start } from "../Icons/start.svg";
import { ReactComponent as Done } from "../Icons/done.svg";

import { renderTime } from "../helpers";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Javan",
    width: "60vw",
    height: "60vw",
    maxWidth: 300,
    maxHeight: 300,
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  runningRoot: {
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60vw",
    height: "60vw",
    maxWidth: 400,
    maxHeight: 400,
  },
  content: {
    //padding: theme.spacing(2),
  },
  icon: {
    width: "20vw",
    height: "20vw",
    maxWidth: 100,
    maxHeight: 100,
  },
  borderRad: {
    borderRadius: "100%",
  },
  time: {
    fontSize: theme.spacing(5),
  },
}));

const Timer = ({ setBg , time, start, pause, reset, status}) => {
  const classes = useStyles();


  const renderStart = () => {
    return (
      <div className={classes.content}>
        <Start className={classes.icon} />
      </div>
    );
  };

  if (status === "RUNNING") {
    return (
      <ButtonBase
        onClick={() => {
          if (status !== "RUNNING") {
            setBg("active");
            return start();
          }
          setBg("simp");
          return pause();
        }}
        className={classes.borderRad}
      >
        <div className={classes.runningRoot}>
          <Clock seconds={time} />
        </div>
      </ButtonBase>
    );
  }

  const renderDone = () => {
    return (
      <div className={classes.content}>
        {/*<Done className={classes.icon} />
        <div className={classes.time}>{PN.convertEnToPe(renderTime(time))}</div>*/}
        <Clock seconds={time} />
      </div>
    );
  };

  const renderContent = () => {
    switch (status) {
      case "RUNNING":
        return renderDone();
      default:
        return renderStart();
    }
  };

  return (
    <ButtonBase
      onClick={() => {
        if (status !== "RUNNING") {
          setBg("active");
          return start();
        }
        setBg("simp");
        return pause();
      }}
      className={classes.borderRad}
    >
      <Paper className={classes.root}>{renderContent()}</Paper>
    </ButtonBase>
  );
};

/*
 <Button onClick={() => start()}>Start Timer</Button>
      <Button
        onClick={() => {
          if (status === "RUNNING") {
            pause();
          } else {
            reset();
          }
        }}
      >
        End Timer
      </Button> 
            <div>{PN.convertEnToPe(renderTime(time))}</div>

      */

export default Timer;
