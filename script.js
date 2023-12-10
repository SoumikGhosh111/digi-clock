// console.log("hello"); 

// let hourAndMinute = document.querySelector("#h-m"); 
let seconds = document.querySelector("#ss");
let AmPm = document.querySelector("#am-or-pm");
let dateData = document.querySelector("#m-wd-d");
let hourTick = document.querySelector("#h");
let dot = document.querySelector("#dots")
let minutesTick = document.querySelector("#m");
let timeFormatDot = document.querySelector(".time-format-dot");
let timeFormatCross = document.querySelector(".time-format-cross");
let timeFormatSelector = document.querySelector(".time-format-selector-class");
let hour12 = document.querySelector("#hour-12");
let hour24 = document.querySelector("#hour-24");
let ampmss = document.querySelector(".am-pm-ss"); 
hour12.style.textDecoration = "underline";
// 12 hour format
let whichFormat = true;
function update() {

    if (whichFormat === false) {
        hour24FomatFunction();
    }
    else if(whichFormat === true){
        hour12FomatFunction(); 
    }
    //whichFormat => true is 12 hour format and whichFormat => false is 24hours format

}
hour24.addEventListener("click", () => {
    whichFormat = false;
    hour24.style.textDecoration = "underline";
    hour12.style.textDecoration = "none";
});
hour12.addEventListener("click", () => {
    whichFormat = true;
    hour24.style.textDecoration = "none";
    hour12.style.textDecoration = "underline";
})



// initial call
update();
setInterval(update, 1000);
function weekDayOf(day) {

    switch (day.toLowerCase()) {
        case "sun":
            return "Sunday";
        case "sat":
            return "Saturday";
        case "mon":
            return "Monday";
        case "tue":
            return "Tuesday";
        case "wed":
            return "Wednesday"
        case "thu":
            return "Thursday";
        case "fri":
            return "Friday";
        default:
            return;
    }
}

function hour24FomatFunction(){ 
    let currTime = new Date();
        let hh = currTime.getHours();
        let mm = currTime.getMinutes();
        let ss = currTime.getSeconds();
        let date = new Date().toDateString();
        let tempArr = date.split(" ");

        // let amPM = new Date().toLocaleTimeString().split(" ");


        let weekDay = weekDayOf(tempArr[0]);
        let month = tempArr[1];
        let todayDate = tempArr[2];


        if (hh < 10) {
            hh = "0" + hh;
        }

        if (mm < 10) {
            mm = "0" + mm
        }
        if (ss < 10) {
            ss = "0" + ss;
        }

        hourTick.innerHTML = `${hh}`;
        minutesTick.innerHTML = `${mm}`;
        seconds.innerHTML = `${ss}`;
        // AmPm.innerHTML = `${amPM[1]}`;
        AmPm.style.visibility = "hidden"; 
        ampmss.classList.add("am-pm-ss-replace"); 

        dateData.innerHTML = `${month}, ${weekDay} ${todayDate}`;
}

function hour12FomatFunction(){ 
    let currTime = new Date();
        let hh = currTime.getHours();
        let mm = currTime.getMinutes();
        let ss = currTime.getSeconds();
        let date = new Date().toDateString();
        let tempArr = date.split(" ");

        // let amPM = new Date().toLocaleTimeString().split(" ");
         let amPM = currTime.toLocaleTimeString([], { hour12: true, hour: '2-digit', minute: '2-digit' }).split(' ');


        let weekDay = weekDayOf(tempArr[0]);
        let month = tempArr[1];
        let todayDate = tempArr[2];



        if (hh > 12) {
            hh = hh - 12;
        }
        if (hh >= 12) {
            flag = true;
        }
        if (hh < 10) {
            hh = "0" + hh;
        }

        if (mm < 10) {
            mm = "0" + mm
        }
        if (ss < 10) {
            ss = "0" + ss;
        }

        AmPm.style.visibility = "visible"; 
        ampmss.classList.remove("am-pm-ss-replace"); 
        // hourAndMinute.innerHTML = `${hh}:${mm}`; 

        hourTick.innerHTML = `${hh}`;
        minutesTick.innerHTML = `${mm}`;
        seconds.innerHTML = `${ss}`;
        AmPm.innerHTML = `${amPM[1].toUpperCase()}`;
        dateData.innerHTML = `${month}, ${weekDay} ${todayDate}`;
}

let date = new Date().toLocaleTimeString();
let tempArr = date.split(" ");
console.log(tempArr);
console.log(tempArr);
timeFormatDot.addEventListener("click", () => {
    timeFormatCross.classList.remove("d-none");
    timeFormatDot.classList.add("d-none");
    timeFormatSelector.classList.remove("d-none");
})
timeFormatCross.addEventListener("click", () => {
    timeFormatCross.classList.add("d-none");
    timeFormatDot.classList.remove("d-none");
    timeFormatSelector.classList.add("d-none");
})




