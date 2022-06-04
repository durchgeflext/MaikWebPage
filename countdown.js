var x = document.getElementById("timer");

deadlineDate = new Date(2022, 09, 25, 12, 00, 00, 00).getTime();
const deadline = Math.floor(deadlineDate / 1000);

const secondsInADay = 86400;
const secondsInAnHour = 3600;
const secondsInAMinute = 60;

function load() {
    x.innerHTML("ERROR");
    while(1) {
        timer();
        setTimeout(nullFunc, 1000);
    }

}

function nullFunc() {

}

function timer() {
    console.log("here");
    currTime = new Date().getTime();
    const today = Math.floor(currTime / 1000);

    if (today < deadline) {

        until = deadline - today;
        remainingTime = calcTimeString(until);
        x.innerHTML("" + remainingTime);
        
    } else {
        x.innerHTML("<a href=https://open.spotify.com/playlist/5Z7RVz1UswI0fNWvrkNKAM?si=4d847d970c29423e> Maik's suicide note</a>");
    }
    console.log("Here");
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

