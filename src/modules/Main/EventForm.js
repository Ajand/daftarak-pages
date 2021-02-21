import React from "react";
import { makeStyles, Paper } from "@material-ui/core";

import TextField from '../components/TextField'
import TopicField from '../components/TopicField'

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Javan !important",
    width: '90%',
    margin: 'auto',
   /* background: `linear-gradient(145deg, #ffffff, #d9d9d9);`,
    boxShadow: `  20px 20px 60px #cdcdcd,
    -20px -20px 60px #ffffff;`,*/
    boxSizing: 'border-box',
    borderRadius: theme.spacing(1),
    padding: `${theme.spacing(0.5)}px ${theme.spacing(2)}px ${theme.spacing(1)}px`
  },
  field: {
    fontFamily: "Vazir !important",
  },
}));

const EventForm = () => {
  const classes = useStyles();
  return (
    <div style={{padding: 20}}>
      <TopicField />
    </div>
  );
};

export default EventForm;
