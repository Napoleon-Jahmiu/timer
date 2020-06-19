// Declaring variables from the html file
const countdownArea = document.querySelector('.countdown');
const numbersArea = document.querySelector('.numbers');
const resetBtn = document.querySelector('.reset');

let timeInterval;
let count = 0;

// This functin is for the animated timer to start moving immediately the page loads.
resetTimer();

// This is to add an event listener to the reset Button for it to set the timer
resetBtn.addEventListener('click', resetTimer);

function resetTimer() {
    // This is to set the timer back to default incase it loads immediately the page loads.
    clearInterval(timeInterval);
    // This is saying the timer should start from 0 anytime after the reset button has been pressed
    count = 0;
    // This is saying it should start from the zero position in vertical axis after the reset button has been pressed
    numbersArea.style.transform = 'translateY(0)'

// This is to get each of the numbers (span class = numbers) height to get the total height of the countdown area (which is wrapped in span of class = countdown) 
const countdownHeight = countdownArea.getBoundingClientRect().height;

// the setInterval funtion is used for time interval so as to know the time that it will take for each of the numbers to appear. And in this case it's 1s
timeInterval = setInterval(() => {
    // This count means that it should count the number upward from the least(In this case it will start from 10) but in 10 = 0 in this case
    count++;
    // here, it will calculate the time it will take times the 
    const timeOffset = countdownHeight * count;
    numbersArea.style.transform = `translateY(-${timeOffset}px)`;
    
    // This is giving it the command to automatically go back default which is to clear and stay at the last position (which is number 0 in this case)
    if(count >= 10) {
        clearInterval(timeInterval);
    }
// This is the seconds of the operation which is in ms (it means 1000ms = 1s)
}, 1000)

}
