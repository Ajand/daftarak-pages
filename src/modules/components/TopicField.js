import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { FocusWithin } from "react-focus-within";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "3px solid black",
    borderRadius: theme.spacing(1),
    width: "100%",
    padding: theme.spacing(0.25),
    overflow: "hidden",
    boxSizing: "border-box",
    "&:focus-within": {
      border: "3px solid #6D40D2",
    },
  },
  label: {
    fontFamily: "Javan",
    fontSize: "2em",
    padding: theme.spacing(0.25),
    display: "inline-block",
  },
  input: {
    border: 0,
    fontSize: "2em",
    fontFamily: "Javan",
    display: "inline-block",
    padding: theme.spacing(0.25),

    outline: "0px !important",
  },
  inputContainer: {
    display: "flex",
  },
  suggestRoot: {
    marginTop: theme.spacing(2),
    border: "3px solid black",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(0.25),
    maxHeight: 200,
    overflow: "auto",
    boxSizing: "border-box",
  },
  suggestItem: {
    fontFamily: "Javan",
    fontSize: "1.8em",
    padding: theme.spacing(0.25),
  },
}));

const topics = [
  "ریاضی",
  "فیزیک",
  "شیمی",
  "زیست",
  "زبان",
  "هدیه‌",
  "عربی",
  "اجتماعی",
];

const TopicField = ({ name, type = "text" }) => {
  const classes = useStyles();

  const [value, setValue] = useState("");
  //const [isFocused, setIsFocused] = useState(false);

  const isOnlyChoice = () => {
    const filteredTopics = topics.filter((topic) => topic.includes(value));
    if (!filteredTopics.length == 1) return false;
    return value === filteredTopics[0];
  };

  return (
    <FocusWithin>
      {({ focusProps, isFocused }) => (
        <React.Fragment>
          <div {...focusProps} className={classes.root}>
            <div className={classes.inputContainer}>
              <label className={classes.label} htmlFor="topic">
                درس:
              </label>
              <input
                className={classes.input}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                name="topic"
              />
            </div>
          </div>
          {isFocused &&
            !!topics.filter((topic) => topic.includes(value)).length &&
            !isOnlyChoice() && (
              <div {...focusProps} className={classes.suggestRoot}>
                {topics
                  .filter((topic) => topic.includes(value))
                  .map((topic) => (
                    <div
                      className={classes.suggestItem}
                      onClick={(e) => {
                        setValue(topic);
                        e.target.blur();
                      }}
                      key={topic}
                    >
                      {topic}
                    </div>
                  ))}
              </div>
            )}
        </React.Fragment>
      )}
    </FocusWithin>
  );
};

export default TopicField;
