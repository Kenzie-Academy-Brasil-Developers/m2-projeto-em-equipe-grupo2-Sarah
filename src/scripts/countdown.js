let countDownDate = new Date().getTime() + (5 * 60 * 1000);

let countDownReset = setInterval( () => {

    let now = new Date().getTime();

    let countDowCalc = countDownDate - now;

    let minutes = Math.floor((countDowCalc % (1000 * 60 * 60)) / (1000 * 60));

    let seconds = Math.floor((countDowCalc % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${minutes}:${seconds}`;

    if (countDowCalc < 0) {
        countDownDate = new Date().getTime() + (5 * 60 * 1000);
    }

}, 1000);

