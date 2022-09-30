const todo = [];
let listTodo = document.querySelector(".list-todo"),
	itemTodo = document.querySelector(".item-todo"),
	createTodo = document.querySelector("input[type='text']"),
	addTodo = document.querySelector(".add-item");

addTodo.addEventListener("click", function (e) {
	let value = createTodo.value;
	if (!todo.includes(value) && value !== "") {
		todo.push(value);
		renderItem(todo.reverse());
        value = '';
	}
});

createTodo.addEventListener("keydown", function (e) {
	let value = e.target.value;
	if (e.keyCode === 13 && !todo.includes(value) && value !== "") {
		todo.push(value);
		renderItem(todo.reverse());
		createTodo.value = "";
	}
});

function renderItem(input) {
	let html = "";
	input.map((item , index) => {
		html += `<li class="list-todo-item">
                    <span class="text">${item}</span>
                    <span class="icon" data-index="${index}"><ion-icon name="trash-outline"></ion-icon></span>
                </li>`;
	});
	listTodo.innerHTML = html;
    if(todo.length > 0) {
        eventItem();
    }
}
function eventItem(){
    let finishTodo = document.querySelectorAll(".text");
    let deleteTodo = document.querySelectorAll(".icon");
    finishTodo.forEach((item)=>{
        item.addEventListener("click", function (e) {
            item.classList.toggle("finish")
        })
    })
    deleteTodo.forEach((item)=>{
        item.addEventListener("click", function (e) {
            let btn = e.currentTarget;
            let index = btn.getAttribute("data-index");
            index = parseInt(index);
            todo.splice(index,1)
            item.parentElement.remove();
            renderItem(todo);
        })
    })
}
