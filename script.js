const TOTAL_TIME = 30 * 60; // em segundos
const timerDisplay = document.getElementById('timer');
const progressCircle = document.querySelector('circle.progress');
const totalLength = 2 * Math.PI * 45;

// Seta o stroke do círculo
progressCircle.style.strokeDasharray = totalLength;
progressCircle.style.strokeDashoffset = 0;

// Define ou obtém a hora final do timer
if (!localStorage.getItem("endTime")) {
    const endTime = Date.now() + TOTAL_TIME * 1000;
    localStorage.setItem("endTime", endTime);
}

function updateTimer() {
    const now = Date.now();
    const endTime = parseInt(localStorage.getItem("endTime"), 10);
    let timeLeft = Math.floor((endTime - now) / 1000);

    if (timeLeft < 0) timeLeft = 0;

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    const offset = totalLength * (1 - timeLeft / TOTAL_TIME);
    progressCircle.style.strokeDashoffset = offset;

    if (timeLeft > 0) {
        setTimeout(updateTimer, 1000);
    } else {
        timerDisplay.textContent = '00:00';
        localStorage.removeItem("endTime"); // limpa para um novo ciclo se quiser
    }
}

updateTimer();
