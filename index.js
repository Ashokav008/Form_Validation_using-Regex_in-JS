const name = document.getElementById("name");
const email = document.getElementById("email");
const mono = document.getElementById("mono");
const terms = document.getElementById("terms");
let nameValid = false;
let emailValid = false;
let monoValid = false;
let submit = document.getElementById('submit');



name.addEventListener('blur', () => {
    let regex_name = /^[a-zA-Z]([0-9a-zA-Z]){5,15}/
    let str_name = name.value;
    if (regex_name.test(str_name)) {
        // console.log("It matched")
        name.classList.remove('is-invalid');
        nameValid = true;

    } else {
        console.log("it not Matched");
        name.classList.add('is-invalid');
        nameValid = false;
    }
    allCorrect()


})

email.addEventListener('blur', () => {
    let regex_email = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let str_email = email.value;
    if (regex_email.test(str_email)) {
        email.classList.remove('is-invalid');
        emailValid = true;

    } else {

        email.classList.add('is-invalid');
        emailValid = false;
    }
    allCorrect()
})

mono.addEventListener('blur', () => {

    let regex_Mono = /^([0-9]){10}$/
    let str_Mono = mono.value;
    if (regex_Mono.test(str_Mono)) {
        mono.classList.remove('is-invalid');
        monoValid = true;

    } else {
        mono.classList.add('is-invalid')
        monoValid = false;
    }
    allCorrect()

})


function allCorrect() {
    if (monoValid && emailValid && nameValid) {
        submit.classList.remove('disabled');
    } else {
        submit.classList.add('disabled');
    }
}


submit.addEventListener('click', (e) => {
    e.preventDefault();
    alert = document.getElementById('alert');

    alert.classList.add('show');
    alert.classList.remove('collapse');

})