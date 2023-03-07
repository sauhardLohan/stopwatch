//IIFE
(function () {
    const min=document.getElementById("min");
    const sec=document.getElementById("sec");
    const hider=document.getElementById("hider-rotater");
    const filler=document.getElementById("filler-rotater");
    const start=document.getElementById("start");
    hider.style.animationPlayState="paused";
    filler.style.animationPlayState="paused";
    let id=null;
    let second=0;
    let minute=0;

    const secTimer=()=>{
        second++;
        console.log(second);
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
        hider.classList.add("hider-animation");
        filler.classList.add("filler-animation");
        hider.style.animationPlayState="running";
        filler.style.animationPlayState="running";
        id=setInterval(secTimer,1000);
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
            startTimer();
            console.log(target);
            target.disabled=true;
        }
        else if(target.id=='stop')
        {
            start.disabled=false;
            stopTimer();
        }
        else if(target.id=='reset'){
            start.disabled=false;
            stopTimer();
            resetTimer();
        }
    }


    document.addEventListener('click',handleClickListener);
  })();
