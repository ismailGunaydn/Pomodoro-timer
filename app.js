let timer;
let timeRemaining = 25 * 60; // Zamanı saniye cinsinden

function startTimer() {
    if (!timer) {
        timer = setInterval(updateTimer, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    timer = null; // Timer durdurulduğunda 'timer' değişkenini sıfırla
}

function resetTimer() {
    clearInterval(timer);
    timer = null; // Timer'ı sıfırla
    timeRemaining = 25 * 60;
    updateDisplay();
}

function updateTimer() {
    if (timeRemaining > 0) {
        timeRemaining--;
        updateDisplay();
    } else {
        clearInterval(timer);
        alert("Pomodoro completed! Take a break.");
    }
}

function updateDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    
    document.getElementById("timer").textContent = `${formattedMinutes}:${formattedSeconds}`;
}

// HTML kısmı için örnek
document.body.innerHTML = '<div id="timer">25:00</div><button onclick="startTimer()">Start</button><button onclick="pauseTimer()">Pause</button><button onclick="resetTimer()">Reset</button>';