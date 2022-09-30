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
		});
	});
	closeModal.onclick = function () {
		modal.style.display = "none";
	};
	next.addEventListener("click", () => {
		handleClick(1);
	});
	window.addEventListener("keydown", (e) => {
		if (e.keyCode === 37 || e.keyCode === 65) {
			handleClick(-1);
		} else if (e.keyCode === 39 || e.keyCode === 68) {
			handleClick(1);
		} else if (e.keyCode === 27) {
			modal.style.display = "none";
		}
	});
	prev.addEventListener("click", () => {
		handleClick(-1);
	});
	function handleClick(e) {
		if (e === 1) {
			setTimeout(() => {
				console.log(index);
				index++;
				if (index > images.length - 1) {
					index = 0;
				}
				innerImg.src = listImg[index].src;
			}, 2000);
		} else if (e === -1) {
			setTimeout(()=>{
				console.log(index);
				index--;
				if (index <= 0) {
					index = images.length - 1;
				}
				innerImg.src = listImg[index].src;
			}, 2000)
		} else {
			setInterval(() => {
				if (index > images.length - 1) {
					index = 0;
				}
				innerImg.src = listImg[index].src;
				index++;
			}, 3000);
		}
	}
	handleClick();
});
