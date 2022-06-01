currTime = new Date().getTime();
const today = Math.floor(currTime / 1000);

deadlineDate = new Date(2022, 09, 25, 12, 00, 00, 00).getTime();
//deadlineDate = new Date().getTime();
const deadline = Math.floor(deadlineDate / 1000);
console.log(today + "today");
console.log(deadline + "deadline");

const secondsInADay = 86400;
const secondsInAnHour = 3600;
const secondsInAMinute = 60;

if (today < deadline) {
    console.log('not yet');
    until = deadline - today;
    console.log(until + "main");
    remainingTime = calcTimeString(until);

    console.log(remainingTime)
    
} else {
    console.log('now');
}


function calcTimeString(time) {

    days = time - time % secondsInADay;
    days = days / secondsInADay;
    overhead = time % secondsInADay;
    console.log(days + ":days");

    hours = overhead - overhead % secondsInAnHour;
    hours = hours / secondsInAnHour;
    overhead = overhead % secondsInAnHour;

    minutes = overhead - overhead % secondsInAMinute;
    minutes = minutes / secondsInAMinute;

    seconds = overhead % secondsInAMinute;


    string = days + ":" + hours + ":" + minutes + ":" + seconds + " remaining";
    return string;
}
