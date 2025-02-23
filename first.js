function makeBubble() {
    var maker = "";
    for (var i = 1; i <= 176; i++) {

        var num = Math.floor(Math.random() * 10);
        maker += `<div class="bubble">${num}</div>`;

    }
    document.querySelector('#pbtm').innerHTML = maker;
}

var timer = 30;
var score = 0;
var hitrn;

function runTimmer() {

    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#timer').textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1> Game over </h1>`;
        }
    }, 1000);
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector('#hitval').textContent = hitrn;

}

function increaseScore() {
    score += 10;
    document.querySelector('#score').textContent = score;
}

document.querySelector('#pbtm').addEventListener('click', function (details) {
    var clickedNumber = Number(details.target.textContent);
    if (clickedNumber === hitrn) {
        increaseScore();
        getNewHit();
        makeBubble();
    }
})


getNewHit();
runTimmer();
makeBubble();

