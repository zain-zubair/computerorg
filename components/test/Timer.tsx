'use client';

import { useState, useEffect } from 'react';

const Timer = (stop: boolean) => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (timerStarted) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          const newSeconds = prevTime.seconds + 1;
          const newMinutes = Math.floor(newSeconds / 60);
          const updatedSeconds = newSeconds % 60;

          return {
            minutes: prevTime.minutes + newMinutes,
            seconds: updatedSeconds,
          };
        });
      }, 1000);
    }

    // Cleanup the previous interval before starting a new one
    return () => {
      clearInterval(intervalId);
      if (!stop) {
        setTimerStarted(!timerStarted);
        setTime({ minutes: 0, seconds: 0 });
      }
    };
  }, [timerStarted, stop]);

  const handleStartButtonClick = () => {
    setTimerStarted(true);
  };

  return (
    <div>
      {!timerStarted && (
        <button onClick={handleStartButtonClick}>Start Timer</button>
      )}
      {timerStarted && (
        <div>
          <p className="font-mono">
            {String(time.minutes).padStart(2, '0')}:
            {String(time.seconds).padStart(2, '0')}
          </p>
        </div>
      )}
    </div>
  );
};

export default Timer;
