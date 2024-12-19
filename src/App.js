import { useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [intervalTracker, setIntervalTracker] = useState(-1);

  const formatTime = (seconds) =>{
    const minutes = Math.floor(seconds /60);
    const remainingSeconds = seconds % 60;
    //return '${minutes}: ${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}';
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""} ${remainingSeconds}`;
  }
  return (
    <>
    <h1>StopWatch</h1>
    <p>Time: {formatTime(time)}</p>

    {
      intervalTracker === -1 && (<button onClick={() => {
        const internvalId = setInterval(() => {
          setTime(t => t+1);
        }, 1000);
        setIntervalTracker(internvalId);
      }}>Start</button>)
    }

{
      intervalTracker !== -1 && (<button onClick={() => {
        clearInterval(intervalTracker);
        setIntervalTracker(-1);
      }}>Stop</button>)
    }
    <button onClick={() => {
        clearInterval(intervalTracker);
        setTime(0);
        setIntervalTracker(-1);
      }}>Reset</button>

    </>
  );
}

export default App;
