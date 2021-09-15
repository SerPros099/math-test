let aa2 = document.querySelector('#question1');
let aa3 = document.querySelector('#question2');
let aa4 = document.querySelector('#question3');
let aa5 = document.querySelector('#question4');
let aa6 = document.querySelector('#question5');
let button = document.querySelector('#total');
button.addEventListener("click", clickFun);
function clickFun() {
    let result = 0;

    let a1 = document.querySelector('#question1').value;
    if (a1 === "4") {
        result++;
        aa2.classList.add("yes");
    }
    else {
        aa2.classList.add("no");
    }

    let a2 = document.querySelector('#question2').value;
    if (a2 === "6") {
        result++;
        aa3.classList.add("yes");
    }
    else {
        aa3.classList.add("no");
    }

    let a3 = document.querySelector('#question3').value;
    if (a3 === "2") {
        result++;
        aa4.classList.add("yes");
    }
    else {
        aa4.classList.add("no");
    }

    let a4 = document.querySelector('#question4').value;
    if (a4 === "14") {
        result++;
        aa5.classList.add("yes");
    }
    else {
        aa5.classList.add("no");
    }

    let a5 = document.querySelector('#question5').value;
    if (a5 === "63") {
        result++;
        aa6.classList.add("yes");
    }
    else {
        aa6.classList.add("no");
    }

    document.querySelector('#result1').innerHTML = "Правильных ответов: " + result;
};