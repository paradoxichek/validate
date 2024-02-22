let inputs = document.querySelectorAll('input')
let requirs = document.querySelectorAll('.required')
let form = document.forms.login


let error = document.querySelector('.error');
let errorJs = 0
let success = document.querySelector('.success');
let successJs = 12

let labels = document.querySelectorAll('.required-label')
let regexLabels = document.querySelectorAll('.regexLabel')
let pAll = document.querySelectorAll('.input-p')
let pRegex = document.querySelectorAll('.p-regex')
let erroricons = document.querySelectorAll('.error-icon')
let errorRegexIcons = document.querySelectorAll('.error-icon-regex')

let loading = document.querySelector('.box')
let spin = document.querySelector('.circle')

let nameRegexes = document.querySelectorAll('.nameRegex')

let phoneRegex = document.querySelector('.phoneRegex')
let phoneLabel = document.querySelector('.phone-label')
let pPhone = document.querySelector('.p-phone')
let phoneIcon = document.querySelector('.error-icon-phone')

let emailRegex = document.querySelector('.emailRegex')
let emailLabel = document.querySelector('.email-label')
let pEmail = document.querySelector('.p-email')
let emailIcon = document.querySelector('.email-icon')

let nameErrorIcon = document.querySelector('#name-icon')

form.onsubmit = (event) => {
    event.preventDefault();
    requirs.forEach((inp, idx) => {
        if (inp.value.length === 0) {
            errorJs++
            inp.classList.add('required-error')
            labels[idx].classList.add('required-label-error')
            pAll[idx].classList.add('p-error')
            pAll[idx].innerHTML = 'Please enter your email adress'
            erroricons[idx].classList.remove('error-icon')
            nameErrorIcon.classList.remove('error-icon-regex')

            error.innerHTML = errorJs
            success.innerHTML = successJs - errorJs
        } else {
            inp.classList.remove('required-error')
            labels[idx].classList.remove('required-label-error')
            pAll[idx].classList.remove('p-error')
            pAll[idx].innerHTML = 'Need to fill'
            erroricons[idx].classList.add('error-icon')
            nameErrorIcon.classList.add('error-icon-regex')
        }
    })

    nameRegexes.forEach((inp, idx) => {
        if (inp.value.length > 0) {
            if (!/^[a-z ,.'-]+$/i.test(inp.value)) {
                errorJs++
                error.innerHTML = errorJs
                success.innerHTML = successJs - errorJs
                inp.classList.add('required-error-regex')
                pRegex[idx].classList.add('p-error-regex')
                regexLabels[idx].classList.add('regex-label-error')
                pRegex[idx].innerHTML = 'Не должно содержать "0-9, !@#$%^..."'
                errorRegexIcons[idx].classList.remove('error-icon-regex')

            } else {
                inp.classList.remove('required-error-regex')
                pRegex[idx].classList.remove('p-error-regex')
                regexLabels[idx].classList.remove('regex-label-error')
                pRegex[idx].innerHTML = 'Отлично'
                errorRegexIcons[idx].classList.add('error-icon-regex')
            }
        }
    })

    if (emailRegex.value.length > 0) {
        if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(emailRegex.value)) {
            errorJs++
            error.innerHTML = errorJs
            success.innerHTML = successJs - errorJs

            emailRegex.classList.add('required-error-email')
            pEmail.classList.add('p-email-error')
            emailLabel.classList.add('email-label-error')
            pEmail.innerHTML = 'Должно содержать "@..., .com,uz,ru...."'
            emailIcon.classList.remove('error-email-icon')
        } else {
            emailRegex.classList.remove('required-error-email')
            pEmail.classList.remove('p-email-error')
            emailLabel.classList.remove('email-label-error')
            pEmail.innerHTML = 'Отлично!'
            emailIcon.classList.add('error-email-icon')
        }
    }

    if(phoneRegex.value.length > 0) {
        if(!/^9989[012345789][0-9]{7}$/.test(phoneRegex.value)) {
            errorJs++
            error.innerHTML = errorJs
            success.innerHTML = successJs - errorJs

            phoneRegex.classList.add('required-error-phone')
            pPhone.classList.add('p-phone-error')
            phoneLabel.classList.add('phone-label-error')
            pPhone.innerHTML = 'Должно начинаться с 9989(0-9)'
            phoneIcon.classList.remove('error-icon-phone')
        } else {
            phoneRegex.classList.remove('required-error-phone')
            pPhone.classList.remove('p-phone-error')
            phoneLabel.classList.remove('phone-label-error')
            pPhone.innerHTML = 'Отлично!'
            phoneIcon.classList.add('error-icon-phone')
        }
    }

    if (errorJs === 0) {
        error.innerHTML = 0
        success.innerHTML = 12
    }

    if (!errorJs > 0) {
        submit()


    } else {
        alert('form incorrect!')
    }

    errorJs = 0
}


function submit() {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value

    })
    console.log(user);

}
