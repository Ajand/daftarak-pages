import React from "react";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles({
  root: {
    backgroundColor: ({ theme }) => theme.palette.main.backgroundColor,
    width: ({ size }) => size,
    height: (props) => props.size,
    boxShadow: " 5px 5px 10px #cdcdcd,  -5px -5px 10px #ffffff;",
    borderRadius: "100%",
//    textAlign: "center",
    fontFamily: "Javan",
    cursor: "pointer",
    padding: ({ size }) => size / 10,
    "&:active": {
      boxShadow: " inset 5px 5px 10px #cdcdcd, inset -5px -5px 10px #ffffff;",
    },
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const IconButton = ({ children, size, onClick }) => {
  const theme = useTheme();
  const props = { size };
  const classes = useStyles({ theme, ...props });
  //console.log(boxShadowCreator(50, true), boxShadowCreator(50, false))
  return (
    <div onClick={onClick} className={classes.root}>
      <div className={classes.container}>{children}</div>
    </div>
  );
};

export default IconButton;
