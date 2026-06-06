const DEFAULT_SECONDS = 25 * 60;
const RING_LENGTH = 2 * Math.PI * 116;

const timeEl = document.querySelector("#time");
const statusEl = document.querySelector("#status");
const toggleBtn = document.querySelector("#toggle");
const resetBtn = document.querySelector("#reset");
const progressBar = document.querySelector(".bar");

let remainingSeconds = DEFAULT_SECONDS;
let timerId = null;
let lastTick = null;

progressBar.style.strokeDasharray = `${RING_LENGTH}`;

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = Math.floor(totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function updateView() {
  const elapsed = DEFAULT_SECONDS - remainingSeconds;
  const progress = elapsed / DEFAULT_SECONDS;

  timeEl.textContent = formatTime(remainingSeconds);
  progressBar.style.strokeDashoffset = `${RING_LENGTH * progress}`;
}

function playAlertSound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const context = new AudioContext();
  const tones = [660, 880, 660];

  tones.forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const start = context.currentTime + index * 0.28;

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.22, start + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.2);

    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + 0.22);
  });
}

function finishTimer() {
  stopTimer();
  remainingSeconds = 0;
  statusEl.textContent = "时间到";
  toggleBtn.textContent = "开始";
  document.body.classList.add("finished");
  playAlertSound();
  updateView();

  window.setTimeout(() => {
    document.body.classList.remove("finished");
  }, 2800);
}

function tick() {
  const now = Date.now();
  const elapsed = Math.floor((now - lastTick) / 1000);

  if (elapsed <= 0) return;

  remainingSeconds = Math.max(0, remainingSeconds - elapsed);
  lastTick += elapsed * 1000;
  updateView();

  if (remainingSeconds === 0) {
    finishTimer();
  }
}

function startTimer() {
  if (remainingSeconds === 0) {
    remainingSeconds = DEFAULT_SECONDS;
  }

  lastTick = Date.now();
  timerId = window.setInterval(tick, 250);
  toggleBtn.textContent = "停止";
  statusEl.textContent = "专注中";
  document.body.classList.remove("finished");
}

function stopTimer() {
  window.clearInterval(timerId);
  timerId = null;
  lastTick = null;

  if (remainingSeconds > 0) {
    statusEl.textContent = remainingSeconds === DEFAULT_SECONDS ? "准备开始" : "已暂停";
  }
}

function resetTimer() {
  stopTimer();
  remainingSeconds = DEFAULT_SECONDS;
  toggleBtn.textContent = "开始";
  statusEl.textContent = "准备开始";
  document.body.classList.remove("finished");
  updateView();
}

toggleBtn.addEventListener("click", () => {
  if (timerId) {
    stopTimer();
    toggleBtn.textContent = "开始";
  } else {
    startTimer();
  }
});

resetBtn.addEventListener("click", resetTimer);

updateView();
