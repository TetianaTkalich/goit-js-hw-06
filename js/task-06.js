const input = document.getElementById('validation-input');
const validLength = Number(input.dataset.length);

input.addEventListener('blur', function (event) {
    if (event.currentTarget.value.length > validLength) {
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');
    } else {
        event.currentTarget.classList.remove('invalid');
        event.currentTarget.classList.add('valid');
    }
 });