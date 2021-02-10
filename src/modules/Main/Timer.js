import React from "react";
import { makeStyles, ButtonBase } from "@material-ui/core";
import PN from "persian-number";
import { useTimer } from "use-timer";
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
    background: theme.palette.container.main,
    boxShadow: `5px 5px 10px ${theme.palette.container.firstShadow},  -5px -5px 10px ${theme.palette.container.secondShadow};`,
    "&:active": {
      background: theme.palette.container.main,
    },
    "&:hover": {
      background: theme.palette.container.main,
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    padding: theme.spacing(2),
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
    fontSize: theme.spacing(5)
  }
}));

const Timer = () => {
  const classes = useStyles();

  const { time, start, pause, reset, status } = useTimer();

  const renderStart = () => {
    return (
      <div className={classes.content}>
        <Start className={classes.icon} />
      </div>
    );
  };

  const renderDone = () => {
    return (
      <div className={classes.content}>
        <Done className={classes.icon} />
        <div className={classes.time}>{PN.convertEnToPe(renderTime(time))}</div>
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
        if (status !== "RUNNING") return start();
        return pause()
      }}
      className={classes.borderRad}
    >
      <div className={classes.root}>{renderContent()}</div>
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
