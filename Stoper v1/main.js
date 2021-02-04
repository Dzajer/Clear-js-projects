// http://websamuraj.pl/examples/js/projekt11/
const start = document.querySelector(".main");
const reset = document.querySelector(".reset");
const divTime = document.querySelector(".time div");
let time = 0;
let active = false;
let idI;
const timer = () => {
  if (!active) {
    active = !active;
    start.textContent = "Pauza";
    idI = setInterval(startF, 10);
  } else {
    active = !active;
    start.textContent = "Start";
    clearInterval(idI);
  }
};

const startF = () => {
  time++;
  divTime.textContent = (time / 100).toFixed(2);
};

const resetF = () => {
  time = 0;
  divTime.textContent = "---";
  active = false;
  start.textContent = "Start";
  clearInterval(idI);
};

start.addEventListener("click", timer);
reset.addEventListener("click", resetF);
