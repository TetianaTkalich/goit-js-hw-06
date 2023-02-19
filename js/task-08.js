const form = document.querySelector('.login-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value == "") {
        return alert('Email field is empty!!!')
    }

    if (password.value == "") {
        return alert("Password is empty!!!")
    }
    console.log({email: email.value, password: password.value});
    event.currentTarget.reset();
});
