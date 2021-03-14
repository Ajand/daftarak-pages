import React, { useState } from "react";
import { makeStyles, Paper } from "@material-ui/core";
import moment from "moment-jalaali";
import PN from "persian-number";
import { renderTime } from "../helpers";

import Button from "../components/Button";
import TextField from "../SassComponents/TextField";
import AutoSuggestField from "../components/AutoSuggestField";
import Selector from "../components/Selector";

const useStyles = makeStyles((theme) => ({
  root: {},
  section: {
    marginBottom: theme.spacing(3),
  },
  premiumNeeded: {
    fontFamily: "Javan",
    fontSize: "1.5em",
    textAlign: "center",
    marginBottom: theme.spacing(1),
    color: "#130A36",
    border: "3px solid #130A36",
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    background: "linear-gradient(110deg, #B6BCD1 35%, #c5c9da 35%)",
  },
  timeContainer: {
    fontFamily: "Javan",
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid #130A36",
    borderRadius: theme.spacing(1),
    background: "linear-gradient(110deg, #f3e8e7 35%, #faf6f5 35%)",
    color: "#130A36",
  },
  fromToContainer: {
    fontSize: theme.spacing(2),
  },
  to: {
    // width: '47%',
    // textAlign: 'left'
  },
  time: {
    fontSize: theme.spacing(4),
    textAlign: "center",
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

const subjects = [
  "دنباله",
  "حد",
  "تابع",
  "مشتق",
  "انتگرال",
  "نظریه گراف",
  "معادله دیفرانسیل",
];

const tags = [
  "درس",
  "آزمون",
  "تمرین",
  "تست",
  "۸ کتاب",
  "ایده‌آلی مستدام",
  "منشور دانش",
  "سالاریها",
];

const options = [
  {
    name: "personal",
    label: "شخصی",
  },
  {
    name: "educational",
    label: "تحصیلی",
  },
  {
    name: "professional",
    label: "حرفه‌ای",
  },
];

const workspaces = [
  {
    name: "personal",
    label: "شخصی",
    premium: false,
    layout: [
      {
        name: "title",
        label: "عنوان کار",
        variant: "AutoSuggest",
        required: true,
        payload: topics,
      },
      {
        name: "tags",
        label: "تگ‌ها",
        variant: "MultiAutoSuggest",
        payload: tags,
      },
      {
        name: "description",
        label: "توضیحات",
        variant: "text",
      },
    ],
  },
  {
    name: "educational",
    label: "تحصیلی",
    premium: true,
    layout: [
      {
        name: "topic",
        label: "درس",
        variant: "AutoSuggest",
        required: true,
        payload: topics,
      },
      {
        name: "chapter",
        label: "بخش",
        variant: "AutoSuggest",
        dependency: "title",
        payload: subjects,
      },
      {
        name: "tags",
        label: "تگ‌ها",
        variant: "MultiAutoSuggest",
        payload: tags,
      },
      {
        name: "description",
        label: "توضیحات",
        variant: "text",
      },
    ],
  },
  {
    name: "professional",
    label: "حرفه‌ای",
    premium: true,
    layout: [
      {
        name: "project",
        label: "پروژه",
        variant: "AutoSuggest",
        required: true,
        payload: topics,
      },
      {
        name: "client",
        label: "مشتری",
        variant: "AutoSuggest",
        dependency: "title",
        payload: subjects,
      },
      {
        name: "tags",
        label: "تگ‌ها",
        variant: "MultiAutoSuggest",
        payload: tags,
      },
      {
        name: "description",
        label: "توضیحات",
        variant: "text",
      },
    ],
  },
];

const EventForm = ({ time, startAt, endAt }) => {
  const classes = useStyles();

  const [workSpace, setWorkSpace] = useState("personal");

  const [event, setEvent] = useState({});

  const setEventProp = (key) => (value) => {
    const nev = { ...event };
    nev[key] = value;
    setEvent(nev);
  };

  const changeWorkSpace = (name) => {
    setEvent({})
    setWorkSpace(name)
  }

  console.log(startAt, endAt, "From event form");

  const renderTimer = () => {
    return (
      <div className={classes.timeContainer}>
        <div className={classes.time}>{PN.convertEnToPe(renderTime(time))}</div>

        <div className={classes.fromToContainer}>
          <div className={classes.from}>
            از:{PN.convertEnToPe(moment(startAt).format("jMM/jDD HH:mm:ss"))}
          </div>
          <div className={classes.to}>
            تا: {PN.convertEnToPe(moment(endAt).format("jMM/jDD HH:mm:ss"))}
          </div>
        </div>
      </div>
    );
  };

  const renderLayout = () => {
    const renderField = ({
      name,
      label,
      payload,
      variant,
      dependency,
      required,
      disabled,
    }) => {
      switch (variant) {
        case "AutoSuggest":
          return (
            <AutoSuggestField
              disabled={disabled}
              name={name}
              label={label}
              suggestions={payload}
              value={event[name]}
              onChange={setEventProp(name)}
            />
          );
        case "MultiAutoSuggest":
          return (
            <AutoSuggestField
              name={name}
              label={label}
              suggestions={payload}
              multi
              disabled={disabled}
              value={event[name]}
              onChange={setEventProp(name)}
            />
          );
        case "text":
          return (
            <TextField
              disabled={disabled}
              name={name}
              label={label}
              value={event[name]}
              onChange={setEventProp(name)}
            />
          );
        default:
          return null;
      }
    };

    const currentWS = workspaces.find((ws) => ws.name === workSpace);

    const renderPremium = () => {
      return (
        <div>
          <div className={classes.premiumNeeded}>
            برای استفاده از فضای کار {currentWS.label} باید اکانت ویژه تهیه
            کنید.
          </div>
          <Button onClick={() => console.log(event)} buttonStyle="yellow">ارتقا اکانت</Button>
        </div>
      );
    };

    return (
      <div>
        {currentWS.layout.map((item) => (
          <div key={item.name} className={classes.section}>
            {renderField({ ...item, disabled: currentWS.premium })}
          </div>
        ))}

        {currentWS.premium ? (
          renderPremium()
        ) : (
          <div className={classes.section}>
            <Button onClick={() => console.log(event)} buttonStyle="blue">ثبت</Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className={classes.section}>{renderTimer()}</div>
      <div className={classes.section}>
        <Selector
          options={options}
          value={workSpace}
          onChange={(v) => changeWorkSpace(v)}
        />
      </div>
      {renderLayout()}
    </div>
  );
};

export default EventForm;
