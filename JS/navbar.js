$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});

var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var email = document.getElementById("email");
var phoneNumber = document.getElementById("phone");
var zipCode = document.getElementById("zip-code");
var submit = document.getElementById("submit");

submit.addEventListener("click", function (event) {
  event.preventDefault();
  var signUp = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    zipCode: zipCode.value,
  };

  function displayMessage(message) {
    var response = document.querySelector(".response");
    response.textContent = message;
    // response.setAttribute("class", type);
  }

  if (signUp.firstName === "") {
    displayMessage("Error!! First name cannot be blank");
  } else if (signUp.lastName === "") {
    displayMessage("Error!! Last name cannot be blank");
  } else if (signUp.email === "") {
    displayMessage("Error!! Email cannot be blank");
  } else if (signUp.phoneNumber === "") {
    displayMessage("Error!! Phone Number cannot be blank");
  } else if (signUp.zipCode === "") {
    displayMessage("Error!! Zip Code cannot be blank");
  } else {
    // success/ no error
    displayMessage("We will give you a call");
    localStorage.setItem("signUp", JSON.stringify(signUp));
    signUpSave();
  }

  function signUpSave() {
    var showText = JSON.parse(localStorage.getItem("signUp"));

    // if (showText !== null) {
    //   document.querySelector(".response").textContent =
    //     "we will give you a call!";
    // }
  }
});
