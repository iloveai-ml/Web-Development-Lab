import React, { useState, useEffect } from 'react';
function Stopwatch() {
const [timer, setTimer] = useState(0);
const [isRunning, setIsRunning] = useState(false);
useEffect(() => {
let intervalId;
if (isRunning) {
intervalId = setInterval(() => {
setTimer((prevTimer) => prevTimer + 1);
}, 1000);
} else {
clearInterval(intervalId);
}
return () => clearInterval(intervalId);
}, [isRunning]);
const startTimer = () => {
setIsRunning(true);
};
const pauseTimer = () => {
setIsRunning(false);
};
const resetTimer = () => {
setTimer(0);
setIsRunning(false);
};
const formatTime = (time) => {
const hours = Math.floor(time / 3600);
const minutes = Math.floor((time % 3600) / 60);
const seconds = time % 60;
return `${hours.toString().padStart(2, '0')}:${minutes
.toString()
.padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};
return (
<div>
<h2>Stopwatch</h2>
<div>
<p>{formatTime(timer)}</p>
</div>
<div>
<button onClick={startTimer} disabled={isRunning}>
Start
</button>
<button onClick={pauseTimer} disabled={!isRunning}>
Pause
</button>
<button onClick={resetTimer}>Reset</button>
</div>

</div>
);
}
export default Stopwatch;
