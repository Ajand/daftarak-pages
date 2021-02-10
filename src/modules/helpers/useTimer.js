import React, { useEffect, useState } from "react";

const useTimer = () => {
  const [startAt, setStartAt] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false)

  let interval;

  useEffect(() => {
    if (running) {
      let s = seconds;
      interval = setInterval(() => {
        s++;
        setSeconds(s);
      }, 1000);
    } else {
      console.log(interval)
    }
  }, [running]);

  const start = () => {
    setStartAt(new Date());
    setRunning(true)
  };

  const pause = () => {
    console.log(interval)
    clearInterval(interval);
    setRunning(false)
  };

  return {
    start,
    pause,
    startAt,
    seconds,
    running
  };
};

export default useTimer;
