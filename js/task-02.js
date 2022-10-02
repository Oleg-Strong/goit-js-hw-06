const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createNewElement = ingredients.map((textEl) => {
  // Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
  const itemEl = document.createElement("li");
  // Добавит элементу класс item.
  itemEl.classList.add("item");
  // Добавит название ингредиента как его текстовое содержимое.
  itemEl.textContent = textEl;
  return itemEl;
});
// После чего вставит все <li> за одну операцию в список ul#ingredients.
const listEl = document.querySelector("#ingredients");
listEl.append(...createNewElement);
