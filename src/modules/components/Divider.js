import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: "3px solid black",
    width: '100%'
  },
}));

const Divider = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};

export default Divider;
