const label = document.querySelector('.label');
const input = document.querySelector('.input-search');

label.addEventListener('click', () =>{
    input.classList.toggle('active');
    label.classList.toggle('active');
})
