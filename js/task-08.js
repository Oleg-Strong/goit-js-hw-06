const form = document.querySelector(".login-form");
form.addEventListener("submit", resultSubmit);

function resultSubmit(event) {
  // При отправке формы страница не должна перезагружаться.
  event.preventDefault();

  const {
    elements: { password, email },
  } = event.currentTarget;

  // Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
  if (password.value === "" || email.value === "") {
    return alert("All fields must be filled in");
  }
  // Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
  const user = { password: password.value, email: email.value };

  // Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
  console.log(user);
  event.currentTarget.reset();
}
