const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

form.addEventListener("submit", (e) => {
  if (!validateInputs()) {
    e.preventDefault();
  }
});

function validateInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();
  let success = true;

  if (usernameValue === "") {
    success = false;
    setError(username, "username is required");
  } else setSuccess(username);

  if (emailValue === "") {
    success = false;
    setError(email, "email is required");
  } else if (!validateEmail(emailValue)) {
    success = false;
    setError(email, "please enter valid email");
  } else setSuccess(email);

  if (passwordValue === "") {
    success = false;
    setError(password, "password is required");
  } else if (passwordValue.length < 8) {
    success = false;
    setError(password, "password must be atleast 8 characters long");
  } else setSuccess(password);

  if (confirmPasswordValue === "") {
    success = false;
    setError(confirmPassword, "confirm password is required");
  } else if (confirmPasswordValue !== passwordValue) {
    success = false;
    setError(confirmPassword, "password is not match");
  } else setSuccess(confirmPassword);

  return success;
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
