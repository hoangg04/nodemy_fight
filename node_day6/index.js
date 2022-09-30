window.addEventListener("keydown", (e) => {
	const innerNumber = document.querySelector(".inner-number");
	const innerCode = document.querySelector(".card-inner-code");
	const innerWhich = document.querySelector(".card-inner-which");
	const innerLocation = document.querySelector(".card-inner-location");
	const innerKey = document.querySelector(".card-inner-key");
	const info = document.querySelector(".info");
	const content = document.querySelector(".content");
	info.style.display = "none";
	content.style.display = "flex";
	let keyName = e.keyCode === 32 ? "Space" : e.key;
	innerWhich.innerText = e.which;
	innerNumber.innerText = e.which;
	innerCode.innerText = e.code;
	innerKey.innerText = keyName;
	innerLocation.innerText = e.location;
});
