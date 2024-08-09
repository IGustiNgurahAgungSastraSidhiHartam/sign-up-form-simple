const signUpForm = document.forms["sign-up-form"];
const firstNameInput = signUpForm["first-name"];
const lastNameInput = signUpForm["second-name"];
const ageInput = signUpForm["age"];
const firstNameValue = document.body.querySelector("#first-name-value");
const alertFnMsg = document.querySelector("#alert-first");
const alertLnMsg = document.querySelector("#alert-last");
const alertAgeMsg = document.querySelector("#alert-age");
const fullNameValue = document.querySelector("#fullname-value");
const ageValue = document.querySelector("#age-value");
const fetchSection = document.querySelector(".fetch-section");
const btnNewData = document.querySelector("#btn-reset");
const helloMsg = document.querySelector("#hello-msg");
const symbol = /[!@#$%^&*()_+';<>/';.,1234567890]/;

function formValidation() {
  if (firstNameInput.value.trim() == "") {
    alertFnMsg.classList.remove("text-success");
    alertFnMsg.classList.add("text-danger");
    alertFnMsg.innerText = "please enter your first name !";
  } else if (
    !isNaN(firstNameInput.value) /*  ||
    symbol.test(firstNameInput.value) */
  ) {
    alertFnMsg.classList.remove("text-success");
    alertFnMsg.classList.add("text-danger");
    alertFnMsg.innerText = "name cannot be a number !";
  } else {
    alertFnMsg.classList.remove("text-danger");
    alertFnMsg.classList.add("text-success");
    alertFnMsg.innerText = "Validated";
  }
  if (lastNameInput.value.trim() == "") {
    alertLnMsg.classList.remove("text-success");
    alertLnMsg.classList.add("text-danger");
    alertLnMsg.innerText = "please enter your last name !";
  } else if (
    !isNaN(lastNameInput.value) /* || symbol.test(lastNameInput.value) */
  ) {
    alertLnMsg.classList.remove("text-success");
    alertLnMsg.classList.add("text-danger");
    alertLnMsg.innerText = "name cannot be a number !";
  } else {
    alertLnMsg.classList.remove("text-danger");
    alertLnMsg.classList.add("text-success");
    alertLnMsg.innerText = "Validated";
  }
  if (ageInput.value < 18) {
    alertAgeMsg.classList.remove("text-success");
    alertAgeMsg.classList.add("text-danger");
    alertAgeMsg.innerText = "minimun age is 18 !";
  } else {
    alertAgeMsg.classList.remove("text-danger");
    alertAgeMsg.classList.add("text-success");
    alertAgeMsg.innerText = "Validated";
  }
}
function fetchIdentity() {
  if (
    alertFnMsg.innerHTML === "Validated" &&
    alertLnMsg.innerHTML === "Validated" &&
    alertAgeMsg.innerHTML === "Validated"
  ) {
    signUpForm.classList.add("d-none");
    fetchSection.classList.remove("d-none");
    fullNameValue.innerHTML = firstNameInput.value + " " + lastNameInput.value;
    ageValue.innerHTML = ageInput.value;
    helloMsg.innerHTML = `Hello, ${firstNameInput.value} ${lastNameInput.value}, data successfully submitted.`;
  } else {
    fetchSection.classList.add("d-none");
    fullNameValue.innerHTML = "undefined";
    ageValue.innerHTML = "undefined";
  }
}

function resetForm() {
  btnNewData.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Thank you for signing up!");
    location.reload();
  });
}

signUpForm.onsubmit = (event) => {
  event.preventDefault();
  formValidation();
  fetchIdentity();
  resetForm();
};
