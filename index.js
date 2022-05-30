currTime = new Date().getTime();
const today = Math.floor(currTime / 1000);

deadlineDate = new Date('2022-09-25T12:00:00').getTime();
//deadlineDate = new Date().getTime();
const deadline = Math.floor(deadlineDate / 1000);

if (today < deadline) {
    console.log('not yet');
    until = deadline - today;
    
} else {
    console.log('now');
}

