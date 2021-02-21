import React, { useState } from "react";
import { Assessment } from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Timer from "./Timer";
import { useTimer } from "use-timer";

import PN from "persian-number";
import { renderTime } from "../helpers";

import Prompt from "../components/Prompt";
import usePrompt from "../components/Prompt/usePrompt";
import InstallTemplate from "../components/Prompt/templates/Install";

const useStyles = makeStyles((theme) => ({
  "@keyframes gradient": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
  root: {
    background: theme.palette.container.main,
    width: "100vw",
    height: "100vh",
    // position: "fixed",
    overflow: "hidden",
    backgroundSize: "100%",
    background: 'url("/images/bg.png")',
    //animation: "$gradient 15s ease infinite",
  },
  rootActive: {
    background: theme.palette.container.main,
    width: "100vw",
    height: "100vh",
    // position: "fixed",
    overflow: "hidden",
    backgroundSize: "100%",
    background: 'url("/images/bg.png")',
  },
  btns: {
    borderRadius: "100%",
    marginBottom: theme.spacing(2),
    boxSizing: "border-box",
    background:
      " linear-gradient(45deg, rgba(0, 191, 143, 0.2), rgba(0, 21, 16, 0.2))",
  },
  leftMenu: {
    display: "inline-block",
    position: "absolute",
    right: theme.spacing(2),
    top: theme.spacing(2),
  },
  rightMenu: {
    display: "inline-block",
    position: "absolute",
    left: theme.spacing(2),
    top: theme.spacing(2),
  },
  timer: {
    position: "absolute",
    left: "20vw",
    // left: 0,
    top: "30vh",
  },

  btn: {
    borderRadius: "100%",
    marginBottom: theme.spacing(2),
    boxSizing: "border-box",
  },
  icon: {
    color: "white",
  },
  time: {
    position: "absolute",
    bottom: theme.spacing(10),
    fontSize: theme.spacing(5),
    fontFamily: "Javan",
    width: "100%",
    color: "white",
    textAlign: "center",
  },
}));

const Main = () => {
  const classes = useStyles();
  const [bg, setBg] = useState("simp");

  const prompt = usePrompt("نصب دفترک", InstallTemplate);

  const { time, start, pause, reset, status } = useTimer();

  const renderRootClass = () => {
    switch (bg) {
      case "simp":
        return classes.root;
      case "active":
        return classes.rootActive;
      default:
        return classes.root;
    }
  };

  return (
    <div className={renderRootClass()}>
      <Prompt prompt={prompt} />
      <Button onClick={prompt.show}>Open Prompt</Button>
      <div className={classes.rightMenu}>
        <IconButton onClick={() => console.log("hellow???")} size="medium">
          <Assessment className={classes.icon} color="inherit" />
        </IconButton>
      </div>
      <div className={classes.timer}>
        <Timer
          time={time}
          start={start}
          pause={pause}
          reset={reset}
          status={status}
          setBg={setBg}
        />
      </div>
      {status == "RUNNING" && (
        <div className={classes.time}>{PN.convertEnToPe(renderTime(time))}</div>
      )}
    </div>
  );
};

export default Main;
