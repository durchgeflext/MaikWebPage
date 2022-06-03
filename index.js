var x = document.getElementById("timer");

deadlineDate = new Date(2022, 09, 25, 12, 00, 00, 00).getTime();
const deadline = Math.floor(deadlineDate / 1000);

const secondsInADay = 86400;
const secondsInAnHour = 3600;
const secondsInAMinute = 60;


currTime = new Date().getTime();
const today = Math.floor(currTime / 1000);

if (today < deadline) {

    until = deadline - today;
    remainingTime = calcTimeString(until);
    x.innerHTML("" + remainingTime);
        
} else {
     x.innerHTML("Link");
}



function calcTimeString(time) {
    
    days = time - time % secondsInADay;
    days = days / secondsInADay;
    overhead = time % secondsInADay;

    hours = overhead - overhead % secondsInAnHour;
    hours = hours / secondsInAnHour;
    overhead = overhead % secondsInAnHour;

    minutes = overhead - overhead % secondsInAMinute;
    minutes = minutes / secondsInAMinute;

    seconds = overhead % secondsInAMinute;


    string = days + ":" + hours + ":" + minutes + ":" + seconds + "<br>remaining";
    return string;
}

