const btn = document.querySelectorAll(".close");
const modal = document.querySelector(".modal");
const open = document.querySelector(".open");

btn.forEach((item) => {
	item.addEventListener("click", (e) => {
		modal.style.display = "none";
	});
});

open.addEventListener("click", (e) => {
    modal.style.display = "flex";
});