let interval;
let timerTime = 25 * 1000 * 60;

interval = setInterval(() => {
  if (timerTime !== 0) {
    timerTime = timerTime - 1000;
    postMessage({
      isRunning: true,
      time: timerTime,
    });
  } else {
    postMessage({
      isRunning: true,
      time: 0,
    });
    clearInterval(interval);
  }
}, 1000);
