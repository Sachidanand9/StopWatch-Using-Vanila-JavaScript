const timerDisplay = document.getElementById('display');
// Initialise Starting Value 
var hr = 0;
var min = 0;
var sec = 0;
var ms = 0;
// Starting value set as boolean 
var timer = false;

//Start Function
function start() {
  if (timer == false) {
        timer = true;
        timerStart();
    }
}
//Stop Function
function stop() {
  if (timer == true) {
    timer = false;
  }
}
//This is timerStart Function
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
    // Showing the value hr, sec, min, ms on HTML
    timerDisplay.innerHTML = hr + ':' + min + ':' + sec + ':' + '0' + ms;

    setTimeout("timerStart()", 10);
  }
}
//Resest Function
function reset() {
    timerDisplay.innerHTML = '00:00:00:000';
    timer = false;
    hr = 0;
    sec = 0;
    min = 0;
    ms = 0;
}