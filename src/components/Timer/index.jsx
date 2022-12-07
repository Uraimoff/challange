import React, { useEffect, useState } from "react";
import "./index.scss";
const Timer = ({color}) => {
  const [timeHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;
  const countDownDate = new Date("Dec 08,2022 21:45:00").getTime();
  const startTimer = () => {
    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
  });
  return (
    <div className="timer-container">
      <p style={{color: color}} >{timeHours < 10 ? "0" + timeHours : timeHours}</p>
      <p style={{color: color}} >:</p>
      <p style={{color: color}} >{timerMinutes < 10 ? "0" + timerMinutes : timerMinutes}</p>
      <p style={{color: color}} >:</p>
      <p style={{color: color}} >{timerSeconds < 10 ? "0" + timerSeconds : timerSeconds}</p>
    </div>
  );
};

export default Timer;
