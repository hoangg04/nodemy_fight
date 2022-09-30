const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cfpassword");
const submit = document.querySelector("#submit");
const form = document.querySelector(".form");

function showError(input, message) {
	const formControl = input.parentElement;
	formControl.classList.add("error");
	formControl.classList.remove("success");
	const small = formControl.querySelector("small");
	small.innerText = message;
}
function showSuccess(input, message) {
	const formControl = input.parentElement;
	formControl.classList.remove("error");
	formControl.classList.add("success");
	const small = formControl.querySelector("small");
	small.innerText = message;
}
function checkEmptyError(arrInput) {
	let isRequired = false;
	arrInput.forEach(function (element) {
		if (element.value.trim() == "") {
			showError(element, `${element.placeholder} is required`);
			isRequired = true;
		} else {
			showSuccess(element, "");
		}
	});
	return isRequired;
}
function checkEmail(input) {
	const regexEmail =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	input.value = input.value.trim();
	if (regexEmail.test(input.value)) {
		showSuccess(input, "");
	} else {
		showError(input, "Invalid email address");
	}
}
function checkLengthError(input, min, max) {
	let isLength = false;
	input.value = input.value.trim();
	if (input.value.length < min) {
		showError(input, `${input.placeholder} must be at least ${min} characters`);
		isLength = true;
	}
	if (input.value.length > max) {
		showError(
			input,
			`${input.placeholder} must be less than ${max} characters`
		);
		isLength = true;
	} else {
		isLength = false;
	}
	return isLength;
}

function checkMatchPasswordError(password, cfpassword) {
	isMatchError = false;
	if (cfpassword.value !== password.value) {
		showError(cfpassword, "Passwords do not match");
		return !isMatchError;
	} else {
		showSuccess(cpassword, "Passwords match");
	}
	return isMatchError;
}

form.addEventListener("submit", function (e) {
	e.preventDefault();
	let isEmtyError = checkEmptyError([username, email, password, cpassword]);
	if (!isEmtyError) {
		checkLengthError(username, 3, 25);
		checkLengthError(password, 6, 30);
		checkMatchPasswordError(password, cpassword);
		checkEmail(email);
	}
});
