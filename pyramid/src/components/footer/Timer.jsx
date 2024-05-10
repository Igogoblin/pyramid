import { useState, useEffect, useRef } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(0);
  const startTimeRef = useRef(0);

  useEffect(() => {
    setInterval(() => {
      setTimer(Date.now() - startTimeRef.current);
    }, 1000);
  });

  startTimeRef.current = Date.now() - timer;

  function formatTime() {
    let minutes = Math.floor((timer / (1000 * 60)) % 60);
    let seconds = Math.floor((timer / 1000) % 60);

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    if (seconds > 0) {
      localStorage.setItem("restartPyramidTrue", JSON.stringify(false));
    }
    return `${minutes}:${seconds}`;
  }

  return <p>{formatTime()}</p>;
}
