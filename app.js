var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var hour = "00";
var min = "00";
var sec = "00";
var msec = "00";
var Interval;
function timer() {
    msec++;
    msecHeading.innerHTML = msec;
    if (msec >= 100) {
      sec++;
      secHeading.innerHTML = sec;
      msec = "00";
    } else if (sec >= 60) {
      min++;
      minHeading.innerHTML = min;
      sec = "00";
    } else if (min >= 60) {
      hour++;
      hourHeading.innerHTML = hour;
      min = "00";
    }
  }
  function start() {
    var btn = document.getElementById("startBtn");
    Interval = setInterval(timer, 10);
    btn.disabled = true;
  }
  function pause() {
    var btn = document.getElementById("startBtn");
    clearInterval(Interval);
    btn.disabled = false;
  }
  
  function reset() {
    pause();
    hour = "00";
    min = "00";
    sec = "00";
    msec = "00";
    msecHeading.innerHTML = msec;
    secHeading.innerHTML = sec;
    minHeading.innerHTML = min;
    hourHeading.innerHTML = hour;
  
  }

  