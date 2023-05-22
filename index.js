// Create digital clock start now
function digitalClock(){
    let hour = document.getElementById("hours");
    let minuts = document.getElementById("minuts");
    let second = document.getElementById("second");
    let am_pm = document.querySelector(".am_pm");


    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    if(hh >= 12){
        am_pm.innerHTML = "PM";
    }else{
        am_pm.innerHTML = "AM";
    }

    if(hh > 12){
        hour.innerHTML = hh - 12;
    }

    if(hh <= 12){
        hour.innerHTML =hh;
    }


    if(mm < 10){
        minuts.innerHTML = "0" + mm;
    }else{
        minuts.innerHTML = mm;
    }

    if(ss < 10){
        second.innerHTML = "0" + ss;
    }else{
        second.innerHTML = ss;
    }

  
}

setInterval(digitalClock, 1000);


// Create digital clock end now



// start to change the photo

let bottomHeadingText = document.getElementById("bottomHeadingText");
let mainHeadingText = document.getElementById("mainHeadingText");
let mainImage = document.querySelector(".mainImage");
let setAlarm = document.getElementById("alarmBtn");

// select tag variable here
let setWeakUpSelector = document.getElementById("setWeakUpSelector");
let setLunchSelector = document.getElementById("setLunchSelector");
let setNapSelector = document.getElementById("setNapSelector");
let setNightSelector = document.getElementById("setNightSelector");





// alarmBtn.addEventListener("click",function(){

function setWeakUp(){    
    let setWeakUpSelector = document.getElementById("setWeakUpSelector");
    let setLunchSelector = document.getElementById("setLunchSelector");
    let setNapSelector = document.getElementById("setNapSelector");
    let setNightSelector = document.getElementById("setNightSelector");

    // let date = new Date();
    let presentHour= new Date().getHours();
    

    if(setWeakUpSelector.value == presentHour){
        mainImage.style.backgroundImage = "url(./image/Breakfast.svg)";
        bottomHeadingText.innerHTML = "GOOD MORNING!! WAKE UP !!";
        mainHeadingText.innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
    }


    if(setLunchSelector.value == presentHour){
        mainImage.style.backgroundImage = "url(./image/lunchTimeBig.svg)";
        bottomHeadingText.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
        mainHeadingText.innerHTML = "LET'S HAVE SOME LUNCH !!";
    }

    if(setNapSelector.value == presentHour){
        mainImage.style.backgroundImage = "url(./image/nap_time.png)";
        bottomHeadingText.innerHTML = "GOOD EVENING !!";
        mainHeadingText.innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    }


    if(setNightSelector.value == presentHour){
        mainImage.style.backgroundImage = "url(./image/goodnight_image.svg)";
        bottomHeadingText.innerHTML = "GOOD NIGHT !!";
        mainHeadingText.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
    }

    let timing = document.getElementsByClassName("timing");

    timing[0].innerText = setWeakUpSelector.options[setWeakUpSelector.selectedIndex].text;
    timing[1].innerText = setLunchSelector.options [setLunchSelector.selectedIndex].text;
    timing[2].innerText = setNapSelector.options[setNapSelector.selectedIndex].text;
    timing[3].innerText =  setNightSelector.options[ setNightSelector.selectedIndex].text;

    let daynamicBlock = document.querySelector(".daynamicBlock");
    daynamicBlock.style.opacity = 1;
}
// )

setAlarm.addEventListener("click", setWeakUp);

