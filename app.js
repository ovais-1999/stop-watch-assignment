var sec = 0;
var min = 0;
var msec = 0;
var interVal;
var secSection = document.getElementById("sec");
var minSection = document.getElementById("min");
var msecSection = document.getElementById("msec");
var interVal;
function timer(){
    msec++
    msecSection.innerHTML = msec;
    if (msec >= 100){
        sec++
        secSection.innerHTML = sec;
        msec = 0
    }
    else if (sec >= 60){
        min++
        minSection.innerHTML = min;
        sec = 0;
    }
   
}
function start(){
 interVal = setInterval(timer, 10);
 document.getElementById("bTn1").disabled = true;
}



function stop(){
    clearInterval(interVal);
    document.getElementById("bTn1").disabled = false;
}
function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minSection.innerHTML = min;
    secSection.innerHTML = sec;
    msecSection.innerHTML = msec;
    stop();
}

// document.getElementById("bTn1").onclick = function() {
//     start();
//     //disable
//     this.disabled = true;
// }