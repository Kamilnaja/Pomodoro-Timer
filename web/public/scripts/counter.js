let interval;
let timerTime;

onmessage = function (name, listener) {
  if (name.data.type === 'START') {
    setupCounter(name.data.payload); // initial time
  } else if (name.data.type === 'SET_TIME') {
    handleTimerActions(name);
  }
};

function handleTimerActions(name) {
  this.interval = name.data.payload.time;
  clearInterval(interval);
}

function setupCounter(time) {
  timerTime = time;
  interval = setInterval(() => {
    if (timerTime !== 0) {
      timerTime = timerTime - 1000;
      postMessage({
        isRunning: true,
        time: timerTime,
      });
    } else {
      postMessage({
        isRunning: false,
        time: 0,
      });
      clearInterval(interval);
    }
  }, 1000);
}
