const startButton = document.getElementById('start-button')
const stopButton = document.getElementById('stop-button')
const resetButton = document.getElementById('reset-button')


let [milliseconds, seconds, minutes] = [0, 0, 0];
let timerRef = document.querySelector('#timer');
let int = null;


document.getElementById('start-button').addEventListener('click', () => {
    if (int != null) {
        clearInterval(int)
    }
    int = setInterval(timer, 10);
    stopButton.removeAttribute('disabled')
    startButton.setAttribute('disabled', '')
    resetButton.setAttribute('disabled', '')

})

document.getElementById('stop-button').addEventListener('click', () => {
    clearInterval(int)
    startButton.removeAttribute('disabled')
    stopButton.setAttribute('disabled', '')
    resetButton.removeAttribute('disabled')
})

document.getElementById('reset-button').addEventListener('click', () => {
    clearInterval(int);
    [milliseconds, seconds, minutes] = [0, 0, 0];
    timerRef.innerHTML = '00:00:000 ';
    resetButton.setAttribute('disabled', '')

})


function timer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }


    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = `${m}:${s}:${ms}`;
}