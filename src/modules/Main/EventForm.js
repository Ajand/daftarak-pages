import React from "react";
import { makeStyles, Paper } from "@material-ui/core";

import Button from "../components/Button";
import TopicField from "../components/TopicField";
import AutoSuggestField from "../components/AutoSuggestField";

const useStyles = makeStyles((theme) => ({
  root: {},
  section: {
    marginBottom: theme.spacing(2),
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

const tags = ["درس", "آزمون", "تمرین", "تست", "۸ کتاب", "ایده‌آلی مستدام", "منشور دانش", "سالاریها"];

const EventForm = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section}>
        <AutoSuggestField name="topics" label=" لیست درس" suggestions={topics} />
      </div>
      <div className={classes.section}>
        <AutoSuggestField
          name="topics"
          disabled
          label="بخش"
          suggestions={subjects}
        />
      </div>
      <div className={classes.section}>
        <AutoSuggestField
          name="tags"
          label="تگ‌ها"
          suggestions={tags}
          multi
        />
      </div>
      <div className={classes.section}>
        <Button buttonStyle="purple">ثبت</Button>
      </div>
    </div>
  );
};

export default EventForm;
