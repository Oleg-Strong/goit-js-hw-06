// Скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

const btnEl = document.querySelector(".change-color");
const textEl = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnEl.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  textEl.textContent = getRandomHexColor();
});
