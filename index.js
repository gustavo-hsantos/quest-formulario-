const formContents = document.querySelectorAll(".form-content");
const form = document.getElementById("form");
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userPhone = document.getElementById("tel");
const message = document.getElementById("mensagem");
const inputs = document.querySelectorAll(".input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkEmail();
  checkTel();
  checkMessage();
  checkInputUsername();
});

userName.addEventListener("blur", () => {
  checkInputUsername();
  checkEmail();
});

userEmail.addEventListener("blur", () => {
  checkEmail();
});

userPhone.addEventListener("blur", () => {
  checkTel();
});

message.addEventListener("blur", () => {
  checkMessage();
});

function checkInputUsername() {
  const usernameValue = userName.value;

  if (usernameValue === "") {
    errorInput(userName);
  } else {
    inputValid(userName);
  }
}

function checkEmail() {
  const userEmailValue = userEmail.value;

  if (userEmailValue === "") {
    errorInput(userEmail);
  } else {
    inputValid(userEmail);
  }
}

function checkTel() {
  const telefoneValidate = userPhone.value;

  if (telefoneValidate === "") {
    errorInput(userPhone);
  } else {
    inputValid(userPhone);
  }
}

function checkMessage() {
  const messageValidate = message.value;

  if (messageValidate === "") {
    errorInput(message);
  } else {
    inputValid(message);
  }
}

function errorInput(input) {
  const formItem = input.parentElement;

  formItem.className = "form-content error";
}

function inputValid(input) {
  const itemForm = input.parentElement;
  itemForm.classList = "form-content verificado";
}
