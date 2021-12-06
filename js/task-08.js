const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
   
    const emailForm = event.currentTarget.elements.email.value;
    const passForm = event.currentTarget.elements.password.value;
    const formObj = {
        email: emailForm,
        password: passForm,
    }
    
    if (emailForm === '') {
        alert ('Все поля должны быть заполнены')
    } else if (passForm === '') {
        alert ('Все поля должны быть заполнены')
    } else {
        formEl.reset();
    console.log(formObj);
    }
    
};