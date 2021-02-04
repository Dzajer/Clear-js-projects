const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");
const txt =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea unde tempora atque quo temporibus rerum ipsa, alias minus ad reiciendis, laborum doloribus harum nostrum est distinctio sapiente voluptas a sunt.";
let indexText = 0;
const time = 10;
const addLetter = () => {
  spnText.textContent += txt[indexText];
  indexText++;
  if (indexText === txt.length) clearInterval(indexTyping);
};
const indexTyping = setInterval(addLetter, time);
const cursorAnimation = () => {
  spnCursor.classList.toggle("active");
};
setInterval(cursorAnimation, 400);
