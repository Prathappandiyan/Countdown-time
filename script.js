const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minute=document.querySelector("#minute");
const seconds=document.querySelector("#seconds");


///console.log(newyear)

function updatetime(){

    const currentyear=new Date().getFullYear();
    const newyear=new Date(`January 1 ${currentyear+1} 00:00:00`);
    const currentdate=new Date();
    const diff=newyear-currentdate;
    const d=Math.floor(diff/1000/60/60/24);
    const h=Math.floor((diff/1000/60/60)%24);
    const m=Math.floor((diff/1000/60)%60);
    const s=Math.floor((diff/1000)%60);

    days.innerHTML=d<10?"0"+d:d;
    hours.innerHTML=h<10?"0"+h:h;
    minute.innerHTML=m<10?"0"+m:m;
    seconds.innerHTML=s<10?"0"+s:s;
}

setInterval(updatetime,1000);



/*
1000ms=1s
60s=1m
60m=1hrs
24hours=1day
*/