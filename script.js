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