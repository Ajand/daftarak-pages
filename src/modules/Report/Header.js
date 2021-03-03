import { useState, useRef, useEffect } from "react";
import {
  ArrowBack,
  ArrowForward,
  ArrowDownwardRounded,
} from "@material-ui/icons";
import moment from "moment-jalaali";
import PN from "persian-number";

const renderMonth = (month) => {
  switch (month) {
    case 0:
      return "فروردین";
    case 1:
      return "اردیبهشت";
    case 2:
      return "خرداد";
    case 3:
      return "تیر";
    case 4:
      return "مرداد";
    case 5:
      return "شهریور";
    case 6:
      return "مهر";
    case 7:
      return "آبان";
    case 8:
      return "آذر";
    case 9:
      return "دی";
    case 10:
      return "بهمن";
    case 11:
      return "اسفند";
  }
};

const jDay = (day) => {
  if (day > 5) return day - 6;
  return day + 1;
};

const jDaysInMonth = (monthMoment) => {
  return moment(moment(monthMoment.toDate()).endOf("jMonth")).jDate();
};

const Header = () => {
  const [selectedMonthYear, setSelectedMonthYear] = useState(moment());
  const [selectedDay, setSelectedDay] = useState(moment());

  const [expanded, setExpanded] = useState(false);

  const monthYear = moment(selectedMonthYear).startOf("jMonth");
  const endOfMonthYear = moment(selectedMonthYear).endOf("jMonth");

  const monthDaysArray = Array(jDaysInMonth(monthYear))
    .fill(0)
    .map((item, index) => index)
    .reduce((pV, cV, i) => {
      if (!pV.length)
        return [
          ...Array(jDay(monthYear.day()))
            .fill(0)
            .map((item, index) => index - jDay(monthYear.day())),
          cV,
        ];
      return [...pV, cV];
    }, [])
    .reduce((pV, cV, i, source) => {
      return [
        ...source,
        ...Array(6 - jDay(endOfMonthYear.day()))
          .fill(0)
          .map((item, index) => index + 1 + source[source.length - 1]),
      ];
    }, [])
    .map((day) => moment(monthYear.toDate()).add(day, "day"))
    .reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / 7);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);

  const currWeek = monthDaysArray
    .reduce((pV, cV) => [...pV, ...cV])
    .reduce((pV, cV, index) => {
      if (moment(cV.toDate()).add(1, 'day').isSame(selectedDay.toDate(), "day"))
        return Math.floor((index + 1) / 7);
      if (pV) return pV;
      return 0;
    }, 0);


  const nextMonth = () => {
    setSelectedMonthYear(moment(selectedMonthYear.toDate()).add(1, "month"));
  };

  const prevMonth = () => {
    setSelectedMonthYear(moment(selectedMonthYear.toDate()).add(-1, "month"));
  };

  const totalWeeks = monthDaysArray.length;

  const currentWeekMargin = (currentWeek) => {
    const a = -132;
    const b = 196;
    return a * (currentWeek - (totalWeeks - 4) / 2) + b;
  };

  return (
    <div className="report-header-container">
      <div className="report-header-month-year-container">
        <i
          onClick={nextMonth}
          className="fi-rr-angle-double-right report-header-month-year-icon"
        />
        <div className="">
          {renderMonth(selectedMonthYear.jMonth())}
          {"   "}
          {PN.convertEnToPe(selectedMonthYear.jYear())}
        </div>
        <i
          onClick={prevMonth}
          className="fi-rr-angle-double-left report-header-month-year-icon"
        />
      </div>
      <div className="report-header-day-titles">
        <div className="report-header-day-title-item">ش</div>
        <div className="report-header-day-title-item">ی</div>
        <div className="report-header-day-title-item">د</div>
        <div className="report-header-day-title-item">س</div>
        <div className="report-header-day-title-item">چ</div>
        <div className="report-header-day-title-item">پ</div>
        <div className="report-header-day-title-item">ج</div>
      </div>

      <div
        className={`report-header-day-picker ${
          expanded && "report-header-day-picker-expanded"
        }`}
      >
        {monthDaysArray.map((week, index) => (
          <div
            key={index}
            className="report-header-day-picker-row"
            style={
              expanded || index !== 0
                ? { transition: "margin-top 0.2s ease" }
                : {
                    marginTop: currentWeekMargin(currWeek),
                    transition: "margin-top 0.2s ease",
                  }
            }
          >
            {week.map((day) => (
              <div
                key={day.format("jYYYY/jMM/jDD")}
                onClick={() => {
                  setSelectedDay(day);
                  setExpanded(false);
                }}
                className={`report-header-day-picker-item ${
                  day.isSame(new Date(), "day") &&
                  "report-header-day-picker-item-today"
                } ${
                  day.jMonth() !==
                    moment(selectedMonthYear.toDate()).jMonth() &&
                  "report-header-day-picker-item-disabled"
                } ${
                  day.isSame(selectedDay.toDate(), "day") &&
                  "report-header-day-picker-item-active"
                } `}
              >
                {PN.convertEnToPe(day.jDate())}
              </div>
            ))}
          </div>
        ))}
        {/* <div
          className="report-header-day-picker-row"
          style={
            expanded
              ? { transition: "margin-top 0.2s ease" }
              : {
                  marginTop: currentWeekMargin(0),
                  transition: "margin-top 0.2s ease",
                }
          }
        >
          <div className="report-header-day-picker-item">۱</div>
          <div className="report-header-day-picker-item">۱</div>
          <div className="report-header-day-picker-item report-header-day-picker-item-today">
            ۷
          </div>
          <div className="report-header-day-picker-item">۱</div>
          <div className="report-header-day-picker-item report-header-day-picker-item-active">
            ۹
          </div>
          <div className="report-header-day-picker-item">۱</div>
          <div className="report-header-day-picker-item">۱۱</div>
        </div>
        <div className="report-header-day-picker-row">
          <div className="report-header-day-picker-item">۲</div>
          <div className="report-header-day-picker-item">۲</div>
          <div className="report-header-day-picker-item report-header-day-picker-item-today">
            ۷
          </div>
          <div className="report-header-day-picker-item">۲</div>
          <div className="report-header-day-picker-item report-header-day-picker-item-active">
            ۹
          </div>
          <div className="report-header-day-picker-item">۲</div>
          <div className="report-header-day-picker-item">۱۱</div>
        </div>
        <div className="report-header-day-picker-row">
          <div className="report-header-day-picker-item">۵</div>
          <div className="report-header-day-picker-item">۶</div>
          <div className="report-header-day-picker-item ">۷</div>
          <div className="report-header-day-picker-item">۸</div>
          <div className="report-header-day-picker-item">۹</div>
          <div className="report-header-day-picker-item">۱۰</div>
          <div className="report-header-day-picker-item">۱۱</div>
        </div>
        <div className="report-header-day-picker-row">
          <div className="report-header-day-picker-item">۴</div>
          <div className="report-header-day-picker-item">۴</div>
          <div className="report-header-day-picker-item report-header-day-picker-item-today">
            ۷
          </div>
          <div className="report-header-day-picker-item">۵</div>
          <div className="report-header-day-picker-item report-header-day-picker-item-active">
            ۹
          </div>
          <div className="report-header-day-picker-item">۱۰</div>
          <div className="report-header-day-picker-item">۱۱</div>
        </div>
        <div className="report-header-day-picker-row">
          <div className="report-header-day-picker-item">۵</div>
          <div className="report-header-day-picker-item">۵</div>
          <div className="report-header-day-picker-item">۵</div>
          <div className="report-header-day-picker-item">۵</div>
          <div className="report-header-day-picker-item">۵</div>
          <div className="report-header-day-picker-item">۵</div>
          <div className="report-header-day-picker-item">۵</div>
        </div>
        <div className="report-header-day-picker-row">
          <div className="report-header-day-picker-item">۲۳</div>
          <div className="report-header-day-picker-item">۲۳</div>
          <div className="report-header-day-picker-item">۲۳</div>
          <div className="report-header-day-picker-item">۲۳</div>
          <div className="report-header-day-picker-item">۲۳</div>
          <div className="report-header-day-picker-item">۲۳</div>
          <div className="report-header-day-picker-item">۲۳</div>
        </div>*/}
      </div>
      <i
        onClick={() => setExpanded(!expanded)}
        className={`fi-rr-angle-down report-header-day-picker-expander ${
          expanded && "report-header-day-picker-expander-expanded"
        }`}
      />
    </div>
  );
};

export default Header;
