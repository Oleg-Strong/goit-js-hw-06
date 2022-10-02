// Скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputEl = document.querySelector("input");

inputEl.addEventListener("blur", (event) => {
  const inputValue = event.currentTarget;
  if (Number(inputValue.dataset.length) === inputValue.value.length) {
    inputEl.classList = "valid";
  } else {
    inputEl.classList = "invalid";
  }
});
