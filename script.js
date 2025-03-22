// 获取DOM元素
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// 计时器变量
let startTime;
let elapsedTime = 0;
let timerInterval;

// 格式化时间显示
function formatTime(time, digits = 2) {
    return time.toString().padStart(digits, '0');
}

// 更新计时器显示
function updateDisplay() {
    const currentTime = elapsedTime;
    
    const hours = Math.floor(currentTime / 3600000);
    const minutes = Math.floor((currentTime % 3600000) / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = Math.floor((currentTime % 1000) / 10);
    
    hoursElement.textContent = formatTime(hours);
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
    millisecondsElement.textContent = formatTime(milliseconds);
}

// 开始计时
function startTimer() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    
    startTime = Date.now() - elapsedTime;
    
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
    }, 10); // 每10毫秒更新一次显示（百分之一秒的精度）
}

// 停止计时
function stopTimer() {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    
    clearInterval(timerInterval);
}

// 重置计时器
function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    updateDisplay();
}

// 添加事件监听器
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

// 初始化显示
updateDisplay(); 