
let form = document.forms.login;
let inputs = document.querySelectorAll("input.required");
let inputs2 = document.querySelectorAll("input");
let succes = document.querySelector('.success')
let error = document.querySelector('.error')
let succesNum = 0
let errorNum = 0


let regEx = {
	name: /^[a-zA-Z]+$/,
	age: /^[0-9]{1,3}$/,
	about: /^[a-zA-Z\s]+$/,
	email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
	js: /^[a-zA-Z]+$/,
	html: /^[a-zA-Z]+$/,
	css: /^[a-zA-Z]+$/,
};

form.onsubmit = (e) => {
	e.preventDefault();

	let obj = {};
	let fm = new FormData(form);

	fm.forEach((value, key) => {
		obj[key] = value;
	});

	validateInputs();
	console.log(obj);
};

let errorp = document.querySelectorAll('.input-p')


function validateInputs() {
    let informationDiv = document.querySelector('.information');
    let informationHTML = '';
    let allInputsValid = true;
    errorNum = 0;
    succesNum = 0;

    inputs.forEach((inp, i) => {
        let id = inp.id;
        if (inp.value.trim() === "") {
            inp.style.border = '1px solid red';
            errorp[i].classList.add('error-p');
            errorp[i].innerHTML = 'Заполните полe!';
            allInputsValid = false;
            errorNum++;
        } else {
            if (regEx[id].test(inp.value)) {
                errorp[i].classList.add('error-p1');
                errorp[i].innerHTML = 'Отлично!';
                inp.style.border = '1px solid blue';
                succesNum++; 
            } else {
                errorp[i].innerHTML = 'Ошибка';
				errorp[i].style.color = 'red'
                if (id === 'email' && !inp.value.includes('@')) {
                    errorp[i].innerHTML = 'Почта должна содержать @ и ".com" ".ru"... ';
                    errorp[i].style.color = 'red'
                } else if (id === 'name' && !regEx[id].test(inp.value)) {
                    errorp[i].innerHTML = 'Введите правильное имя!';
                    errorp[i].style.color = 'red'
                }
                errorNum++;
            }
        }

        informationHTML += `<p>${id}: ${inp.value}</p>`;
    });

    if (!allInputsValid) {
        informationHTML = '<p style="color: red;" >Не все поля заполнены!</p>';
    } 

    informationDiv.innerHTML = informationHTML;
	
	succes.innerHTML = succesNum
	error.innerHTML = errorNum
}
