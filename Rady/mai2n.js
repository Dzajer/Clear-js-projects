let options = [];
const btnAdd = document.querySelector(".add");
const resetBtn = document.querySelector(".clean");
const showOptions = document.querySelector(".showOptions");
const showAdvice = document.querySelector(".showAdvice");
const h1 = document.querySelector("h1");

const addOption = (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  let newOptions = input.value;
  options.push(newOptions);
  input.value = "";
  alert(`Dodałeś: ${newOptions}`);
};

btnAdd.addEventListener("click", addOption);
ressetBtn = document.addEventListener("click", () => {
  //   options.value = "";
});

showOptions.addEventListener("click", () => {
  alert(`Możliwe opcje to: ${options}`);
});

showAdvice.addEventListener("click", () => {
  const show = Math.floor(Math.random() * options.length);
  h1.textContent = options[show];
});

resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  options.length = 0;
});
