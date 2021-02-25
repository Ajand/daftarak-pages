import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { FocusWithin } from "react-focus-within";
import { Close, Add } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "3px solid #130A36",
    borderRadius: theme.spacing(1),
    width: "100%",
    padding: theme.spacing(0.25),
    overflow: "hidden",
    boxSizing: "border-box",
    "&:focus-within": {
      border: "3px solid #617be2",
    },
    position: "relative",
    color: '#130A36'
  },
  label: {
    fontFamily: "Javan",
    fontSize: "2em",
    padding: theme.spacing(0.25),
    display: "inline-block",
    whiteSpace: "nowrap",
    color: '#130A36'

  },
  disabledRoot: {
    border: "3px solid #888",
    borderRadius: theme.spacing(1),
    width: "100%",
    padding: theme.spacing(0.25),
    overflow: "hidden",
    boxSizing: "border-box",
    cursor: "not-allowed",
    "&:focus-within": {
      border: "3px solid #6D40D2",
    },
  },
  disabledLabel: {
    fontFamily: "Javan",
    fontSize: "2em",
    padding: theme.spacing(0.25),
    display: "inline-block",
    color: "#888",
    whiteSpace: "nowrap",
  },
  input: {
    border: 0,
    fontSize: "2em",
    fontFamily: "Javan",
    display: "inline-block",
    padding: theme.spacing(0.25),
    paddingRight: theme.spacing(1),
    outline: "0px !important",
    color: '#130A36',
  },
  inputContainer: {
    display: "flex",
  },
  suggestRoot: {
    marginTop: theme.spacing(2),
    border: "3px solid #130A36",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(0.25),
    maxHeight: 200,
    overflow: "auto",
    boxSizing: "border-box",
    color: '#130A36'

  },
  suggestItem: {
    fontFamily: "Javan",
    fontSize: "1.8em",
    padding: theme.spacing(0.25),
    color: '#130A36'

  },
  multiBadgesContainer: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "row",
    paddingBottom: theme.spacing(2),
    overflowX: "auto",
    overflowY: "hidden",
    alignItems: "baseline",
    color: '#130A36'

  },
  badge: {
    padding: "4px 4px 4px 14px",
    border: "3px solid #130A36",
    marginRight: theme.spacing(1),
    fontFamily: "Javan",
    fontSize: "2em",
    borderRadius: 50,
    display: "flex",
    whiteSpace: "nowrap",
    alignItems: "center",
    color: '#130A36',
    background: "#f0f7fb",

  },

  badgeText: {
    display: "inline-block",
  },
  badgeDelete: {
    display: "flex",
    border: "3px solid #130A36",
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    background: "#F8DF6D",
    marginLeft: theme.spacing(2),
    cursor: "pointer",
    color: '#130A36',

  },
  addBadgeButton: {
    border: "3px solid #130A36",
    width: 40,
    height: 40,
    display: "flex",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    background: "#479967",
    color: '#130A36',
    marginLeft: theme.spacing(2),
    cursor: "pointer",
    position: "absolute",
    right: 6,
    top: 6,
  },
}));

const AutoSuggestField = ({
  name,
  type = "text",
  suggestions,
  label,
  disabled = false,
  defaultValue = "",
  multi,
}) => {
  const classes = useStyles();

  const [value, setValue] = useState(defaultValue);
  //const [isFocused, setIsFocused] = useState(false);
  const [multiValues, setMulti] = useState(new Set());

  const isOnlyChoice = () => {
    const filteredSuggests = suggestions.filter((suggest) =>
      suggest.includes(value)
    );
    if (!filteredSuggests.length == 1) return false;
    return value === filteredSuggests[0];
  };

  const addToMultiValues = (value) => {
    setMulti(new Set([...multiValues, value]));
  };

  const removeFromMultiValues = (value) => {
    const multiSet = new Set([...multiValues]);
    multiSet.delete(value);
    setMulti(multiSet);
  };

  if (disabled)
    return (
      <div className={classes.disabledRoot}>
        <div className={classes.inputContainer}>
          <label className={classes.disabledLabel} htmlFor={name}>
            {label}:
          </label>
          <input className={classes.input} disabled value={value} />
        </div>
      </div>
    );

  if (multi)
    return (
      <FocusWithin>
        {({ focusProps, isFocused }) => (
          <React.Fragment>
            <div {...focusProps} className={classes.root}>
              <div className={classes.inputContainer}>
                <label className={classes.label} htmlFor={name}>
                  {label}:
                </label>
                <input
                  className={classes.input}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  name={name}
                  type={type}
                />
                {value && (
                  <div
                    onClick={() => {
                      setValue("");
                      addToMultiValues(value);
                    }}
                    className={classes.addBadgeButton}
                  >
                    <Add />
                  </div>
                )}
              </div>
            </div>
            {isFocused &&
              !!suggestions
                .filter((suggest) => suggest.includes(value))
                .filter((suggest) => !multiValues.has(suggest)).length &&
              !isOnlyChoice() && (
                <div {...focusProps} className={classes.suggestRoot}>
                  {suggestions
                    .filter((suggest) => suggest.includes(value))
                    .filter((suggest) => !multiValues.has(suggest))
                    .map((suggest) => (
                      <div
                        className={classes.suggestItem}
                        onClick={(e) => {
                          setValue("");
                          addToMultiValues(suggest);
                          e.target.blur();
                        }}
                        key={suggest}
                      >
                        {suggest}
                      </div>
                    ))}
                </div>
              )}
            {!![...multiValues].length && (
              <div className={classes.multiBadgesContainer}>
                {[...multiValues].map((item) => (
                  <div key={item} className={classes.badge}>
                    <div className={classes.badgeText}> {item}</div>
                    <div
                      onClick={() => removeFromMultiValues(item)}
                      className={classes.badgeDelete}
                    >
                      <Close />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </React.Fragment>
        )}
      </FocusWithin>
    );

  return (
    <FocusWithin>
      {({ focusProps, isFocused }) => (
        <React.Fragment>
          <div {...focusProps} className={classes.root}>
            <div className={classes.inputContainer}>
              <label className={classes.label} htmlFor={name}>
                {label}:
              </label>
              <input
                className={classes.input}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                name={name}
                type={type}
              />
            </div>
          </div>
          {isFocused &&
            !!suggestions.filter((suggest) => suggest.includes(value)).length &&
            !isOnlyChoice() && (
              <div {...focusProps} className={classes.suggestRoot}>
                {suggestions
                  .filter((suggest) => suggest.includes(value))
                  .map((suggest) => (
                    <div
                      className={classes.suggestItem}
                      onClick={(e) => {
                        setValue(suggest);
                        e.target.blur();
                      }}
                      key={suggest}
                    >
                      {suggest}
                    </div>
                  ))}
              </div>
            )}
        </React.Fragment>
      )}
    </FocusWithin>
  );
};

export default AutoSuggestField;
