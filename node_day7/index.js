const tags = ["demo", "test"];
const input = document.querySelector(".input");
const contentTag = document.querySelector(".content-tag");
const removeAll = document.querySelector(".remove-all");
createTag();
function createTag() {
	contentTag.querySelectorAll(".tag").forEach((item) => {
		item.remove();
	});
	tags
		.slice()
		.reverse()
		.forEach((tag) => {
			let textTag = `
            <div class="btn tag"><span class="inner-text">${tag}</span><span onclick="removeTag(this, '${tag}')"><ion-icon name="close-outline" class="remove"></ion-icon></span></div>
            `;
			contentTag.insertAdjacentHTML("afterbegin", textTag);
		});
	input.focus();
}
function removeTag(element, tag) {
	let index = tags.indexOf(tag);
	tags.splice(index, 1);
	element.parentElement.remove();
	input.focus();
}

function addTag(e) {
	if (e.keyCode === 13) {
		let tag = e.target.value.trim();
		if (tag !== "" && !tags.includes(tag)) {
			tags.push(tag);
			createTag();
		}
		e.target.value = "";
	}
}
input.addEventListener("keyup", addTag);


removeAll.addEventListener("click", () => {
	tags.length = 0;
	contentTag.querySelectorAll(".tag").forEach((item) => {
		item.remove();
	});
	input.focus();
});
