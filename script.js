document.getElementById('name').addEventListener('input', function () {
    var name = document.getElementById('name').value;
    var nameRegex = /^[A-Za-z\s]+$/;
    var nameError = document.getElementById('nameError');

    if (!nameRegex.test(name)) {
        document.getElementById('name').classList.add('invalid');
        document.getElementById('name').classList.remove('valid');
        nameError.style.display = 'block';
    } else {
        document.getElementById('name').classList.remove('invalid');
        document.getElementById('name').classList.add('valid');
        nameError.style.display = 'none';
    }
});

document.getElementById('email').addEventListener('input', function () {
    var email = document.getElementById('email').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailError = document.getElementById('emailError');
  
    if (!emailRegex.test(email)) {
        document.getElementById('email').classList.add('invalid');
        document.getElementById('email').classList.remove('valid');
        emailError.style.display = 'block';
    } else {
        document.getElementById('email').classList.remove('invalid');
        document.getElementById('email').classList.add('valid');
        emailError.style.display = 'none';
    }
  });