import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Slide } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "#6ee1a3",
    height: "80vh",
    bottom: 0,
    position: "absolute",
    border: "4px solid black",
    borderBottom: 0,
    borderRadius: "20px 20px 0 0",
    boxSizing: "border-box",
    overflow: 'hidden'
  },
  content: {
    marginTop: 20,
    overflowY: 'auto',
    padding: theme.spacing(2),
    height: "calc(80vh - 50px)",
  }
}));

const Slider = ({ open, children }) => {
  const classes = useStyles();

  return (
    <Slide direction="up" in={open}>
      <div className={classes.root}>
        <div className={classes.content}>
        {children}

        </div>
      </div>
    </Slide>
  );
};

export default Slider;
