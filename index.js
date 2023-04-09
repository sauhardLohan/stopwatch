//IIFE
(function () {
  const min = document.getElementById("min");
  const sec = document.getElementById("sec");
  const hider = document.getElementById("hider-rotater");
  const filler = document.getElementById("filler-rotater");
  const start = document.getElementById("start");
  // initially making the state of animation of hider-rotator and filler-rotator to be paused
  hider.style.animationPlayState = "paused";
  filler.style.animationPlayState = "paused";
  let id = null;
  let second = 0;
  let minute = 0;

  const secTimer = () => {
    // function to increase second and minute counter
    second++;
    console.log(second);
    if (second == 60) {
      second = 0;
      // after every 60 seconds passed incresing the minute counter
      minute++;
      if (minute == 60) {
        // reseting timer on limit exceed
        resetTimer();
        // showing the alert if 60 minutes passed and the timer reached it's limit
        alert("time limit exceeded");
        return;
      }
      if (minute < 10) {
        // giving the minutes counter numbers less than 10 a decimal 0 at start
        min.innerHTML = "0" + minute;
      } else {
        min.innerHTML = "" + minute;
      }
    }
    if (second < 10) {
      // giving the seconds counter numbers less than 10 a decimal 0 at start
      sec.innerHTML = "0" + second;
      return;
    }
    sec.innerHTML = second + "";
  };

  const startTimer = () => {
    // adding class to hider-rotator and filler-rotator to start animation
    hider.classList.add("hider-animation");
    filler.classList.add("filler-animation");
    // making the state of animation of hider-rotator and filler-rotator to be running
    hider.style.animationPlayState = "running";
    filler.style.animationPlayState = "running";
    // calling the secTimer function every 1s delay to increase seconds and minute counter
    id = setInterval(secTimer, 1000);
  };

  const stopTimer = () => {
    // stoping the timer by clearing the interval
    clearInterval(id);
    // making the state of animation of hider-rotator and filler-rotator to be paused so that animation stops at last intance and remains there until
    // made running
    hider.style.animationPlayState = "paused";
    filler.style.animationPlayState = "paused";
  };

  const resetTimer = () => {
    // reseting counters
    second = 0;
    minute = 0;
    // stoping the timer by clearing the interval
    clearInterval(id);
    // showing 00:00 in counter html
    min.innerHTML = "00";
    sec.innerHTML = "00";
    // removing class to hider-rotator and filler-rotator to stop animation
    hider.classList.remove("hider-animation");
    filler.classList.remove("filler-animation");
  };

  const handleClickListener = (e) => {
    // handling click events
    const target = e.target;
    if (target.id == "start") {
      // on clicking of start button starting timer
      startTimer();
      // disabling the start button after timer started
      target.disabled = true;
    } else if (target.id == "stop") {
      // enabling the start button after timer stoped
      start.disabled = false;
      // on clicking of stop button stoping timer
      stopTimer();
    } else if (target.id == "reset") {
      // enabling the start button after timer reseted
      start.disabled = false;
      // on clicking of reset button reseting  timer
      resetTimer();
    }
  };

  document.addEventListener("click", handleClickListener);
})();
