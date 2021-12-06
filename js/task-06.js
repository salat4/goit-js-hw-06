const inputValue = document.querySelector('#validation-input');
inputValue.addEventListener('blur', onEventChangeInput);

function onEventChangeInput(event) {
    if (event.currentTarget.value.length === 6) {
        inputValue.classList.add('valid');
        inputValue.classList.remove('invalid')
    } else {
        inputValue.classList.add('invalid');
        inputValue.classList.remove('valid')
    }
}