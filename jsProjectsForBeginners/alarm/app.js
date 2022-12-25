// date=new Date("1998-09-11 01:47:10")


var audio = new Audio('horse.ogg');



const alarmSubmit = document.getElementById('alarmSubmit')
alarmSubmit.addEventListener('click', setAlarm)


function ringbell() {
    audio.play();
}



function setAlarm(e) {
    e.preventDefault()
    // bcz it reload page again and again so we use preventdefault
    console.log("setting alarm");

    const alarm = document.getElementById('alarm')
    alarmDate = new Date(alarm.value)
    console.log(`setting alarm for ${alarmDate}`);

    now = new Date()
    let timeToalarm = alarmDate - now

    console.log(timeToalarm);

    if (timeToalarm >= 0) {
        setTimeout(() => {
            console.log("Ringing now")
            ringbell()
        }, timeToalarm)
    }
}

