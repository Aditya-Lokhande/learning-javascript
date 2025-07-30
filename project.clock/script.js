let timecontainer=document.getElementById("time-container");
let datecontainer=document.getElementById("date-container");
let months=["january","february","march","april","may","june","july","august","september","october","november","december"]

const genratetime=()=>{
    let date=new Date();

    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let milisecond=date.getMilliseconds();

    timecontainer.innerHTML=`${hours}::${minutes}::${seconds} <span>${milisecond}</span>`;

    datecontainer.innerHTML=`${date.getDate()}/${months[date.getMonth()]}/${date.getFullYear()}`;
}

setInterval(()=>{
    genratetime();
},1000)