// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action= "decrement"]');
const incrementBtn = document.querySelector('button[data-action= "increment"]');
const valueEl = document.querySelector("#value");

// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
