let options = [];

const input = document.querySelector("input");

document.querySelector(".add").addEventListener("click", (e) => {
  e.preventDefault();
  let newOptions = input.value;
  options.push(newOptions);
  alert(`Dodałeś: ${newOptions}`);
  input.value = " ";
});

document.querySelector(".clean").addEventListener("click", (e) => {
  e.preventDefault();
  options.length = 0;
});

document.querySelector(".showOptions").addEventListener("click", () => {
  alert(`Dostępne możliwości: ${options}`);
});

document.querySelector(".showAdvice").addEventListener("click", () => {
  const play = Math.round(Math.random()) * options.length;
  h1.textContent = play;
});
