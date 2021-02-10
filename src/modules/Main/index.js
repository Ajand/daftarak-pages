import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";

import { ReactComponent as Tomato } from "../Icons/tomato.svg";
import { ReactComponent as Flow } from "../Icons/flow.svg";
import { ReactComponent as Music } from "../Icons/music.svg";
import { ReactComponent as Menu } from "../Icons/menu.svg";
import { ReactComponent as Report } from "../Icons/report.svg";
import { ReactComponent as Social } from "../Icons/social.svg";

import Timer from "./Timer";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.container.main,
    width: "100vw",
    height: "100vh",
    // position: "fixed",
    overflow: 'hidden'
  },
  btn: {
    background: theme.palette.container.main,
    boxShadow: `5px 5px 10px ${theme.palette.container.firstShadow},  -5px -5px 10px ${theme.palette.container.secondShadow};`,
    marginBottom: theme.spacing(2),
    "&:active": {
      background: theme.palette.container.main,
    },
    "&:hover": {
      background: theme.palette.container.main,
    },
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.rightMenu}>
        
      </div>
      <div>
        <IconButton
          className={classes.btn}
          onClick={() => console.log("wtf")}
          size={50}
        >
          <Tomato width={30} height={30} />
        </IconButton>
      </div>
      <div>
        <IconButton
          className={classes.btn}
          onClick={() => console.log("hellow???")}
          size={50}
        >
          <Flow width={30} height={30} />
        </IconButton>
      </div>
      <div>
        <IconButton
          className={classes.btn}
          onClick={() => console.log("hellow???")}
          size={50}
        >
          <Music width={30} height={30} />
        </IconButton>
      </div>
      <div>
        <IconButton
          className={classes.btn}
          onClick={() => console.log("hellow???")}
          size={50}
        >
          <Menu width={30} height={30} />
        </IconButton>
      </div>
      <div>
        <IconButton
          className={classes.btn}
          onClick={() => console.log("hellow???")}
          size={50}
        >
          <Report width={30} height={30} />
        </IconButton>
      </div>
      <div>
        <IconButton
          className={classes.btn}
          onClick={() => console.log("hellow???")}
          size={50}
        >
          <Social width={30} height={30} />
        </IconButton>
      </div>
      <div>
        <Timer />
      </div>
    </div>
  );
};

export default Main;
