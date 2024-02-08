import React from "react";
import { useState, useEffect } from "react";
import "./index.css";

const Index = () => {
  const [time, setTime] = useState({ hr: "00", min: "00", sec: "00" });
  const [newTime, setNewTime] = useState(0);
  const [start, setStart] = useState(true);

  useEffect(() => {
    let timer;
    if (!start) {
      if (newTime <= 0) {
        setTime({ hr: "00", min: "00", sec: "00" });
        let t =
          Number(time.hr) * 3600 + Number(time.min) * 60 + Number(time.sec);
        setNewTime(t);
        timer = setInterval(() => {
          setNewTime((prev) => prev - 1);
        }, 1000);
      } else {
        timer = setInterval(() => {
          setNewTime((prev) => prev - 1);
        }, 1000);
      }
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [start, newTime, time]);

  const reload = () => {
    let t = Number(time.hr) * 3600 + Number(time.min) * 60 + Number(time.sec);
    setNewTime(t);
    setStart(true);
  };

  const startTimer = (e) => {
    e.preventDefault();
    if (start) {
      let t = Number(time.hr) * 3600 + Number(time.min) * 60 + Number(time.sec);
      setNewTime(t);
    }
    setStart(!start);
  };
  return (
    <div class="timer-container">
      <h1>Count Down Timer</h1>
      <div class="timer-heading">
        <h2>HOURS</h2>
        <h2>MINUTES</h2>
        <h2>SECONDS</h2>
      </div>
      <div>
        <input
          type="text"
          value={newTime !== 0 ? Math.floor(newTime / 3600) : time.hr}
          onChange={(e) => {
            setTime({ ...time, hr: e.target.value });
          }}
          class="input-timer"
        />
        <span>:</span>
        <input
          type="text"
          value={newTime !== 0 ? Math.floor((newTime / 60) % 60) : time.min}
          onChange={(e) => {
            setTime({ ...time, min: e.target.value });
          }}
          class="input-timer"
        />
        <span>:</span>
        <input
          type="text"
          value={newTime !== 0 ? Math.floor(newTime % 60) : time.sec}
          onChange={(e) => {
            setTime({ ...time, sec: e.target.value });
          }}
          class="input-timer"
        />
      </div>
      <div>
        <button
          type="submit"
          class={start ? "start-button" : "pause-button"}
          onClick={(e) => startTimer(e)}
        >
          {start ? "Start" : "Pause"}
        </button>
        <button type="reset" class="reset-button1" onClick={reload}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Index;
