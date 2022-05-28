const timerDisplay = document.getElementById('display');

var hr = 0;
var min = 0;
var sec = 0;
var ms = 0;
var timer = false;

function start() {
  if (timer == false) {
        timer = true;
        timerStart();
    }
}
function stop() {
  if (timer == true) {
    timer = false;
  }
}

function timerStart() {
    if (timer == true) {
    ms = parseInt(ms);
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    ms++;
    if(ms == 99){
    sec++;
    ms = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
      ms = 0;
    }
    if (min == 60) {
      hr++;
      min = 0;
      sec = 0;
      ms = 0;
    }
    if(ms < 10 || ms == 0){
        ms = '0' + ms;
    }
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    } 
    timerDisplay.innerHTML = hr + ':' + min + ':' + sec + ':' + '0' + ms;

    setTimeout("timerStart()", 10);
  }
}

function reset() {
    timerDisplay.innerHTML = '00:00:00:000';
    timer = false;
    hr = 0;
    sec = 0;
    min = 0;
}