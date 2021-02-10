import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Javan",
    background: theme.palette.primary.main,
  },
  titles: {
    textAlign: "center",
  },
  persianTitle: {
    fontSize: "6em",
    color: theme.palette.primary.text,
  },
  engTitle: {
    fontSize: "2em",
    color: theme.palette.primary.text,
  },
}));

const Intro = () => {
  const classes = useStyles({});
  return (
    <div className={classes.root}>
      <div className={classes.titles}>
        <div className={classes.persianTitle}>دفترءءک</div>
        <div className={classes.engTitle}>Daftarak</div>
      </div>
    </div>
  );
};

export default Intro;
