const showClock = document.getElementById("clock");
// present time clock
setInterval(() => {
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let meridian = hr <= 12 ? "am" : "pm";
    hr = hr >= 12 ? hr - 12 : hr;
    min = min >= 10 ? min : "0" + min;
    sec = sec >= 10 ? sec : "0" + sec;
    let perfectTime = (`${hr}:${min}:${sec} ${meridian}`);
    showClock.innerHTML = perfectTime;
}, 1000);

