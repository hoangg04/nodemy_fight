const btn = document.querySelectorAll(".btn");
const popUp = document.querySelector(".pop-up");

const messages = [
	{
		message: "This is a success message !",
		icon: `<ion-icon name="checkmark-circle"></ion-icon>`,
		color: "#4daf54",
		backgroundColor: "#92c496",
	},
	{
		message: "This is a warning message !",
		icon: `<ion-icon name="checkmark-circle"></ion-icon>`,
		color: "#ffa502",
		backgroundColor: "#c4c292",
	},
	{
		message: "This is a error message !",
		icon: `<ion-icon name="checkmark-circle"></ion-icon>`,
		color: "red",
		backgroundColor: "#c49292",
	},
];
btn.forEach((item, index) => {
	item.addEventListener("click", function (e) {
		renderMessage(messages, index);
		let popUpItems = document.querySelectorAll(".pop-up__item");
		popUpItems.forEach((popItem) => {
			popItem.classList.remove("hide");
			popItem.classList.add("active");
			setTimeout(() => {
				popItem.classList.add("hide");
				popItem.classList.remove("active");
			}, 3000);
			setTimeout(() => {
				popItem.remove();
			}, 4200);
		});
	});
});
// function classToogle() {
// 	let lastChild = popUp.children[popUp.children.length - 1];
// 	setInterval(() => {
// 		lastChild.remove();
// 	}, 4000);
// }
function renderMessage(lists, index) {
	let htmls = `
        <div class="pop-up__item" style="color:${lists[index].color};background-color:${lists[index].backgroundColor}">
            ${lists[index].icon}
            <p class="message">${lists[index].message}</p>
        </div>`;
	popUp.insertAdjacentHTML("afterbegin", htmls);
}
