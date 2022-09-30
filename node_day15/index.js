const url = "https://fakestoreapi.com/products";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const listProducts = $(".list-products");
const search = $(".search-input");
const listItems = [];
function getData(callback) {
	fetch(url)
		.then((req) => req.json())
		.then(callback)
		.catch((err) => console.log(err));
}

function renderProducts(data) {
	data.forEach((product) => {
		const li = document.createElement("div");
		li.setAttribute("class", "products__item");
		listItems.push(li);
		li.innerHTML = `
			<li class="products__item">
				<div class="products__item-img"><img src="${product.image}" alt=""></div>
					<div class="products__item-info">
						<p class="products__item-name">${product.title.slice(0,30)}</p>
						<p class="products__item-price">${product.price}$</p>
				</div>
			</li>
        `;
		listProducts.appendChild(li);
	});
}

search.addEventListener("keyup", function (e) {
	let filter = e.target.value.toUpperCase().trim();
	filter = filter.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, "A");
	filter = filter.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
	filter = filter.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, "E");
	filter = filter.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
	filter = filter.replace(/I|Í|Ì|Ĩ|Ị/g, "I");
	filter = filter.replace(/ì|í|ị|ỉ|ĩ/g, "i");
	filter = filter.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, "O");
	filter = filter.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
	filter = filter.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, "U");
	filter = filter.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
	filter = filter.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, "Y");
	filter = filter.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
	filter = filter.replace(/Đ/g, "D");
	filter = filter.replace(/đ/g, "d");
	filter = filter.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
	filter = filter.replace(/\u02C6|\u0306|\u031B/g, "");
	filterProducts(filter);
});
function filterProducts(seacrh) {
	listItems.forEach(filterItem =>{
		if(filterItem.innerText.toUpperCase().includes(seacrh)){
			filterItem.style.display = "flex";
		}
		else{
			filterItem.style.display = 'none';
		}
	})
}
function start() {
	getData(renderProducts);
}
start();
