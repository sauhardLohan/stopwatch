(function () {
    const min=document.getElementById("min");
const sec=document.getElementById("sec");
const hider=document.getElementById("hider-rotater");
const filler=document.getElementById("filler-rotater");
hider.style.animationPlayState="paused";
filler.style.animationPlayState="paused";
let id=null;
let second=0;
let minute=0;

const secTimer=()=>{
    second++;
    if(second==60)
    {
        second=0;
        minute++;
        if(minute==60)
        {
            resetTimer();
            alert("time limit exceeded");
            return;
        }
        if(minute<10)
        {
            min.innerHTML="0"+minute;
        }
        else{
            min.innerHTML=""+minute;
        }
    }
    if(second<10)
    {
        sec.innerHTML="0"+second;
        return;
    }
    sec.innerHTML=second+"";
}

const startTimer=()=>{
    id=setInterval(secTimer,1000);
    hider.classList.add("hider-animation");
    filler.classList.add("filler-animation");
    hider.style.animationPlayState="running";
    filler.style.animationPlayState="running";
}

const stopTimer=()=>{
    clearInterval(id);
    hider.style.animationPlayState="paused";
    filler.style.animationPlayState="paused";
}

const resetTimer=()=>{
    second=0;
    minute=0;
    clearInterval(id);
    min.innerHTML="00";
    sec.innerHTML="00";
    hider.classList.remove("hider-animation");
    filler.classList.remove("filler-animation");
}

const handleClickListener =(e)=>{
    const target=e.target;
    if(target.id=='start')
    {
        console.log("started");
        startTimer();
    }
    else if(target.id=='stop')
    {
        console.log("stopped");
        stopTimer();
    }
    else if(target.id=='reset'){
        console.log("reset");
        stopTimer();
        resetTimer();
    }
}


document.addEventListener('click',handleClickListener);
  })();
