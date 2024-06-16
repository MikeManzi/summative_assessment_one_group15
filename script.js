document.getElementById("name").addEventListener("input", function () {
  var name = document.getElementById("name").value;
  var nameRegex = /^[A-Za-z\s]+$/;
  var nameError = document.getElementById("nameError");

  if (!nameRegex.test(name)) {
    document.getElementById("name").classList.add("invalid");
    document.getElementById("name").classList.remove("valid");
    nameError.style.display = "block";
  } else {
    document.getElementById("name").classList.remove("invalid");
    document.getElementById("name").classList.add("valid");
    nameError.style.display = "none";
  }
});

document.getElementById("email").addEventListener("input", function () {
  var email = document.getElementById("email").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var emailError = document.getElementById("emailError");

  if (!emailRegex.test(email)) {
    document.getElementById("email").classList.add("invalid");
    document.getElementById("email").classList.remove("valid");
    emailError.style.display = "block";
  } else {
    document.getElementById("email").classList.remove("invalid");
    document.getElementById("email").classList.add("valid");
    emailError.style.display = "none";
  }
});

document.getElementById("phone").addEventListener("input", function () {
  var phone = document.getElementById("phone").value;
  var phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
  var phoneError = document.getElementById("phoneError");

  if (!phoneRegex.test(phone)) {
    document.getElementById("phone").classList.add("invalid");
    document.getElementById("phone").classList.remove("valid");
    phoneError.style.display = "block";
  } else {
    document.getElementById("phone").classList.remove("invalid");
    document.getElementById("phone").classList.add("valid");
    phoneError.style.display = "none";
  }
});
