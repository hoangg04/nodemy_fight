const listImg = [
	{
		id: 1,
		src: "img1.jpeg",
	},
	{
		id: 2,
		src: "img2.jpeg",
	},
	{
		id: 3,
		src: "img3.jpeg",
	},
	{
		id: 4,
		src: "img4.jpeg",
	},

	{
		id: 5,
		src: "img5.jpeg",
	},
	{
		id: 6,
		src: "img6.jpeg",
	},
	{
		id: 7,
		src: "img7.jpeg",
	},
	{
		id: 8,
		src: "img9.jpeg",
	},
];
window.addEventListener("load", function () {
	const images = document.querySelectorAll(".gallery-item");
	const modal = document.querySelector(".modal");
	const closeModal = document.querySelector(".close");
	const innerImg = document.querySelector(".inner-img");
	const next = document.querySelector(".next");
	const prev = document.querySelector(".prev");
	var index = 0;

	for (let i = 0; i < images.length; i++) {
		let img = images[i];
		img.src = listImg[i].src;
	}
	images.forEach(function (img) {
		img.addEventListener("click", function (el) {
			modal.style.display = "flex";
			index = parseInt(this.dataset.img);
			innerImg.src = listImg[index].src;
			if (index === 0) {
				prev.style.display = "none";
			} else if (index === images.length - 1) {
				next.style.display = "none";
			} else {
				prev.style.display = "block";
				next.style.display = "block";
			}
		});
	});
	closeModal.onclick = function () {
		modal.style.display = "none";
	};
	next.addEventListener("click", () => {
		handleClick(1);
	});
	prev.addEventListener("click", () => {
		handleClick(-1);
	});

	function handleClick(e) {
		if (e === 1) {
			index++;
			if (index >= images.length - 1) {
				index = images.length - 1;
				next.style.display = "none";
			}
			innerImg.src = listImg[index].src;
			prev.style.display = "block";
		} else if (e === -1) {
			index--;
			if (index <= 0) {
				index = 0;
				prev.style.display = "none";
			}
			innerImg.src = listImg[index].src;
			next.style.display = "block";
		}
	}
});
