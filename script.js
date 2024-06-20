// Event Listener for Name Validation (on input)
document.getElementById("name").addEventListener("input", function () {
  var name = document.getElementById("name").value;
  //This regex ensures the name field only accepts letters (uppercase and lowercase) and spaces 
  var nameRegex = /^[A-Za-z\s]+$/;
  var nameError = document.getElementById("nameError");
  // Check if name matches the regular expression
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

// Event Listener for Email Validation (on input)
document.getElementById("email").addEventListener("input", function () {
  var email = document.getElementById("email").value;
  // Regular Expression for Email Validation \(common email format\)
  // This regex matches a common email format consisting of\:
  // \- Characters before "@" \(username/alias\)
  // \- "@" symbol separating the username and domain
  // \- Characters after "@" \(domain name\)
  // \- A dot \(\.\) followed by characters \(top\-level domain\)
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

  //Check if email matches the regular expression
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


document.getElementById("event_date_input").addEventListener("input", function () {
  var event_date = document.getElementById("event_date_input").value;
  /**
   * validations for the date frormat.
   * 1. The month (MM) is between 01 and 12.
   * 2. The year (YYYY) is a four-digit number starting with 19 or 20, covering the years from 1900 to 2099.
   * 3. Correct days for months with 30 days (April, June, September, November).
   * 4. Correct days for February, including leap years.
   * 5. The day (DD) is between 01 and 31 - counting for the days in the month.
   */
  var event_dateRegex = /^(0[13578]|1[02])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$|^(0[469]|11)\/(0[1-9]|[12][0-9]|30)\/(19|20)\d\d$|^(02)\/(0[1-9]|1[0-9]|2[0-8])\/(19|20)\d\d$|^(02)\/(29)\/((19|20)(04|08|[2468][048]|[13579][26])|2000)$/;
  var event_dateError = document.getElementById("event_date_error");

  if(!event_dateRegex.test(event_date)){
    document.getElementById("event_date_input").classList.add("invalid");
    document.getElementById("event_date_input").classList.remove("valid");
    event_dateError.style.display = "block";
  } else {
    document.getElementById("event_date_input").classList.remove("invalid");
    document.getElementById("event_date_input").classList.add("valid");
    event_dateError.style.display = "none";
  }
});

// Event Listener for Tickets Validation (on input)
document.getElementById("event_tickets_input").addEventListener("input", function () {
  var tickets = document.getElementById("event_tickets_input").value;

  // Regular Expression for Tickets Validation (number between 1 and 10)
  // This regex ensures the ticket number is between 10 and 1:
  var ticketsRegex =  /^(10|[1-9])$/;
  var ticketsError = document.getElementById("event_tickets_error");

  // Check if ticket number matches the regular expression
  if (!ticketsRegex.test(tickets)) {
    document.getElementById("event_tickets_input").classList.add("invalid");
    document.getElementById("event_tickets_input").classList.remove("valid");
    ticketsError.style.display = "block";
  } else {
    document.getElementById("event_tickets_input").classList.remove("invalid");
    document.getElementById("event_tickets_input").classList.add("valid");
    ticketsError.style.display = "none";
  }
});

document.getElementById("registerForm").addEventListener("submit", event => {
  event.preventDefault();
  event.target.innerHTML = "<h1>Thank you for registering!</h1>";
})
