import validator from "validator";

let email = document.querySelectorAll("input[type=email]");
let submit = document.querySelectorAll("button[type=submit]");

submit.forEach((element, i) => {
  element.addEventListener("click", () => {
    if (validator.isEmail(email[i].value) === false) {
      email[i].setCustomValidity("Введите email в формате: example@email.com");
    } else {
      email[i].setCustomValidity("");
    }
  });
});

email.forEach((element, i) => {
  element.addEventListener("input", () => {
    if (validator.isEmail(email[i].value) === false) {
      email[i].setCustomValidity("");
    } else {
      email[i].setCustomValidity("");
    }
  });
});
