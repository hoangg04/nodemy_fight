const inputImg = document.querySelector("#input-img");

inputImg.addEventListener("change", (e) => {
	let file = e.target.files[0];
	if (!file) return;
	let audio = document.createElement("audio");
	audio.src = URL.createObjectURL(file);
	document.querySelector(".preview").appendChild(audio);
	audio.play();
});