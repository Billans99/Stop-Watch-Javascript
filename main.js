const timeDisplay = document.querySelector("#time-display")
const startButton = document.querySelector("#start-button")
const pauseButton = document.querySelector("#pause-button")
const resetButton = document.querySelector("#reset-button")

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalID;
let hrs = 0;
let mins = 0;
let secs = 0;

startButton.addEventListener('click', () => {
    if (paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalID = setInterval(updateTime, 1000)
    }
})
pauseButton.addEventListener('click', () => {})
resetButton.addEventListener('click', () => {})

function updateTime() {
    elapsedTime = Date.now() - startTime;
}