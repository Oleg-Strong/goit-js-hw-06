// Переменные для доступа к элементам DOM
const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

// Событие при котором добавляется элемнт
btnCreate.addEventListener("click", () => {
  const inputValue = inputEl.value;
  createBoxes(inputValue);
});
// function addButtonHandler() {
//   createBoxes(inputEl.value);
// }

// Событие при котором удоляются все элементы и очищается "input"
btnDestroy.addEventListener("click", destroyBoxes);

// Функция destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
function destroyBoxes() {
  inputEl.value = "";
  document.querySelectorAll(".box").forEach((eliment) => eliment.remove());
}

// Функция getRandomHexColor для получения цвета.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// функцию createBoxes для добавления элемента.
function createBoxes(amount) {
  for (let i = 0, size = 30; i < amount; i += 1, size += 10) {
    const divEl = document.createElement("div");
    divEl.classList.add("box");
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    boxesEl.append(divEl);
    // boxesEl.insertAdjacentHTML(
    //   "beforeend",
    //   `<div class="box" style = background-color:${getRandomHexColor()};width:${size}px;height:${size}px></div>`
    // );
  }
}
