
const toggle = document.getElementById("flexSwitchCheckChecked");
const body = document.querySelector("body");
let navlinks = document.querySelectorAll('.nav-link');
let toggleText = document.querySelector(".form-check-label")
let date = document.getElementById("date")

toggle.addEventListener("click", function () {
    if (toggle.checked) {
        toggle.style.backgroundColor = "black"; //rgba(0,0,0,0.5)
        body.style.backgroundColor = "black"; //rgba(0,0,0,0.85)
        body.style.color = 'white';
        toggleText.innerHTML = "Light-Mode";
        body.style.transition = "1s";
        for (let i = 0; i < navlinks.length; i++) { //assing and changing all links of nav bar using query selector
            let navlink = navlinks[i];
            navlink.style.color = 'white'; // Change the text color to blue
        }
        // date.style.color = 'white';
    }
    else {
        toggle.style.backgroundColor = "rgba(0,0,0,0.5)";
        body.style.backgroundColor = "white";
        body.style.color = 'black';
        toggleText.innerHTML = "Dark-Mode";
        body.style.transition = "1s";
        for (let i = 0; i < navlinks.length; i++) { //assing and changing all links of nav bar using query selector
            let navlink = navlinks[i];
            navlink.style.color = 'black'; // Change the text color to blue
        }
        // date.style.color = 'black';
        
    }
})

// analog watch project
// 12 hour = 360deg.  => 1 hour = 360/12 = 30 deg.  => but also to lye hour hand b/w two hours no.s we have to compare with minutes also so,  30 deg. = 1 hour = 60 minutes  or, 60 minutes = 30 deg. then => 1 minute = 30/60 = 1/2

// that means min. = min/2 deg. rotation and then, hour = (30 deg. + min/2 deg.) rotation
// for minute => 60 minutes = 360 deg. rotation  then, => 1 minute = 360/60 = 6 deg. rotation and for m minites = 6 * m deg.
// for second => 60 seconds = 360 deg. rotation  then, => 1 second = 360/60 = 6 deg. rotation and for s seconds = 6 * s deg.
let H = document.getElementById("Hour")
let M = document.getElementById("Minute")
let S = document.getElementById("Second")

setInterval(() => {
    date = new Date();
    hourTime = date.getHours();
    minutesTime = date.getMinutes();
    secondTime = date.getSeconds();

    hourRotation = 30 * hourTime + minutesTime / 2; //described frist
    minuteRotation = 6 * minutesTime;
    secondRotation = 6 * secondTime;

    H.style.transform = `rotate(${hourRotation}deg)`
    M.style.transform = `rotate(${minuteRotation}deg)`
    S.style.transform = `rotate(${secondRotation}deg)`

}, 1000);

// date and time project
setInterval(showTime, 1000); //made function "showTime" which will be call every second by using setInterval method.

function showTime() { //function defination
    let time = new Date(); //storing complete date obj. inside "time" variable     
    let hour = time.getHours(); //getting hour from "time" var using inbilt method .getHours();
    let min = time.getMinutes(); //getting minutes from "time" var using inbilt method .getMinutes();
    let sec = time.getSeconds(); //getting second from "time" var using inbilt method .getSeconds();
    session = "AM";

    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }
    else if (hour == 0) {
        hour = 12;
        session = "AM"
    }
    else {
        session = "AM"
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = `${hour} : ${min} : ${sec} ${session}`

    document.getElementById("clock").innerHTML = currentTime;
}


let today = new Date(); // new Date() is Object to declere date. To get more detiles about date we can run it on consol browser to get prototype
let newToday = today.toDateString();
// console.log(newToday);
document.getElementById("date").innerHTML = newToday;
// date and time function project ends

// stopewatch function
let hr1 = 0;
let min1 = 0;
let sec1 = 0;
let milli = 0;
let timer = false;

function start() {
    timer = true;
    myFun();
}

function stop() {
    timer = false;
    myFun();
}
function reset() {
    location.reload();
}

function myFun() {
    if (timer == true) {
        milli++;
        if (milli == 100) {
            sec1++;
            milli = 0;
        }
        if (sec1 == 60) {
            min1++;
            sec1 = 0;
        }
        if (min1 == 60) {
            hr1++;
            min1 = 0;
        }

        setTimeout("myFun()", 10)
        document.getElementById("milli").innerHTML = milli;
        document.getElementById("sec").innerHTML = sec1;
        document.getElementById("min").innerHTML = min1;
        document.getElementById("hr").innerHTML = hr1;
    }

}