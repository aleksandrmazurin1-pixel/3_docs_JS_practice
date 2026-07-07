/*
Подписка на событие 'storeChanged' — в обработчике пока просто console.log(window.store) 
(display.js ещё нет, поэтому просто смотрим в консоль)
Обработчик формы добавления категории — читает значение из инпута и вызывает addCategory(...)*/

const form = document.getElementById('form');
const input = document.getElementById('input');

renderStore();


window.addEventListener('storeChanged', renderStore);

function renderStore() {
    console.log(window.store);
}

form.addEventListener('submit', (evt) => handleForm(evt)); 
function handleForm(evt) {
    evt.preventDefault();
    
    addCategory(input.value);
    input.value = '';
}