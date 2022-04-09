function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
timeInetrval = null;

startButton.addEventListener('click', startChengeColor);

function startChengeColor(event) {
  timeInetrval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startButton.disabled = true;
}

stopButton.addEventListener('click', stopChenge);

function stopChenge(event) {
  if (timeInetrval) {
    clearInterval(timeInetrval);
    startButton.disabled = false;
  }
}
