// Declaring variables in JS from selecting Id's from HTML file
const timeDisplay = document.querySelector("#time-display")
const startButton = document.querySelector("#start-button")
const pauseButton = document.querySelector("#pause-button")
const resetButton = document.querySelector("#reset-button")

// Declaring variables
let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalID;
let hrs = 0;
let mins = 0;
let secs = 0;

// On click, if game state is paused, it will unpause it. It will start the timer, refreshing every 1000 milliseconds (1second)
startButton.addEventListener('click', () => {
    if (paused) {
        paused = false
        startTime = Date.now() - elapsedTime
        intervalId = setInterval(updateTime, 1000)
    }
})

// If pause is false, which means it is running, change pause value to true
pauseButton.addEventListener('click', () => {
    if (!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime
        clearInterval(intervalId)
    }
})

// On click of reset button, clock will pause, and all timer values reset to 0. Time will be reset back to string "00:00:00"
resetButton.addEventListener('click', () => {
    paused = true;
    clearInterval(intervalId)
    startTime = 0
    elapsedTime = 0
    currentTime = 0
    hrs = 0
    mins = 0
    secs = 0
    timeDisplay.textContent = "00:00:00"
})

// Function for updating time, increases every second
function updateTime() {
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60)
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60)
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60)

    secs = pad(secs)
    mins = pad(mins)
    hrs = pad(hrs)

    // Updates the actual text of the 00:00:00 by the secs, mins, hrs variables
    timeDisplay.textContent = `${hrs}:${mins}:${secs}`

    // Checks if unit is greater than 2, if not, Adds "0" string padding to the left of the number
    function pad(unit) {
        return (("0") + unit).length > 2 ? unit : "0" + unit
    }
}
