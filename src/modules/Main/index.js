import React, { useState } from "react";
import { Assessment } from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import Timer from "./Timer";
import { useTimer } from "use-timer";

import PN from "persian-number";
import { renderTime } from "../helpers";

import Prompt from "../components/Prompt";
import usePrompt from "../components/Prompt/usePrompt";
import InstallTemplate from "../components/Prompt/templates/Install";
import Slider from "../components/Slider";
import EventForm from "./EventForm";

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
    background: 'url("/images/bg2.png")',
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
    width: "80%",
    color: "#FF5555",
    textAlign: "center",
    border: "4px solid black",
    boxSizing: "border-box",
    background: "white",
    right: "10%",
  },
  "@keyframes eventPopper": {
    "0%": {
      height: 0,
    },
    "100%": {
      height: "60vh",
    },
  },
  eventFormContainer: {
    width: "100%",
    background: "white",
    bottom: 0,
    position: "absolute",
    border: "4px solid black",
    borderBottom: 0,
    height: "60vh",
    borderRadius: "20px 20px 0 0",
    boxSizing: "border-box",
    // animation: "$eventPopper 1s ease-out",
  },
}));

const Main = () => {
  const classes = useStyles();
  const [bg, setBg] = useState("simp");

  const prompt = usePrompt("نصب دفترک", InstallTemplate);

  const { time, start, pause, reset, status } = useTimer();

  console.log(status);

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
      <div className={classes.rightMenu}>
        <IconButton onClick={prompt.show} size="medium">
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
      <Slider open={status === "PAUSED"}>
        <div>
          <EventForm />
        </div>
      </Slider>
    </div>
  );
};

export default Main;
