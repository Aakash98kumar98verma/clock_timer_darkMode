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

    hourRotation = 30*hourTime + minutesTime/2; //described frist
    minuteRotation = 6*minutesTime;
    secondRotation = 6*secondTime;

    H.style.transform = `rotate(${hourRotation}deg)`
    M.style.transform = `rotate(${minuteRotation}deg)`
    S.style.transform = `rotate(${secondRotation}deg)`
    
}, 1000);