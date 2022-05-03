const setAlarmBtn = document.getElementById("setAlarmBtn");

setAlarmBtn.addEventListener("mouseover", () => {
    setAlarmBtn.innerHTML = `<span class="material-icons md-24">notifications_active</span> <span id="setAlarmText"> Set an Alarm! </span>`;
});
setAlarmBtn.addEventListener("mouseout", () => {
    setAlarmBtn.innerHTML = `<span class="material-icons md-24">notifications_active</span>`;
});
setAlarmBtn.addEventListener("click", () => {
    alarmInput.innerHTML = `            
    <p>Select the time when you need to set your alarm.</p>
    <div class="newLine">
        <input type="date" name="" class="inputType" id="alarmDate">
        <input type="time" name="" class="inputType" id="alarmTime">
    </div>
    <span id="alarmNotifcation"></span>
    <button class="btn" id="alarmDataSubmitBtn">Submit</button>
`;
    const audio = new Audio('https://d6cp9b00-a.akamaihd.net/downloads/ringtones/files/mp3/koyal-3526.mp3');
    const alarmDataSubmitBtn = document.getElementById("alarmDataSubmitBtn");

    alarmDataSubmitBtn.addEventListener("click", showDetail);

    const playAlarm = () => audio.play();

    function showDetail() {
        setInterval(() => {
            const alarmDate = document.getElementById("alarmDate").value;
            const alarmTiming = document.getElementById("alarmTime").value;
            const alarmNotifcation = document.getElementById("alarmNotifcation");
            let setAlarmTime = `${alarmDate} ${alarmTiming}`;
            console.log(setAlarmTime);
            if (setAlarmTime === "") {
                alarmNotifcation.innerHTML = "Please enter the Date & Time to set Alarm!"
                alarmNotifcation.style.color = "red";
            } else {
                alarmNotifcation.innerHTML = `Congratulations!! Your alarm has been set for ${setAlarmTime}`;
                alarmNotifcation.style.color = "green";
            }

            let alarmTime = new Date(setAlarmTime);
            let realTime = new Date();

            if (alarmTime.getMonth() == realTime.getMonth() && alarmTime.getDate() == realTime.getDate() && alarmTime.getHours() == realTime.getHours() && alarmTime.getMinutes() == realTime.getMinutes()) {
                console.log("matches");
                playAlarm();
            } else {
                console.log("not matches");
            }
        }, 1000);
    }

});