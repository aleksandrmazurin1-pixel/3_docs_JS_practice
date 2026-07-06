/*
Подписка на событие 'storeChanged' — в обработчике пока просто console.log(window.store) 
(display.js ещё нет, поэтому просто смотрим в консоль)
Обработчик формы добавления категории — читает значение из инпута и вызывает addCategory(...)*/

addEventListener('storeChanged', handleStore);
addEventListener('submit', (evt) => handleForm(evt)); //Не могу понять, как связана форма, которая в HTL с формой здесь, потому что не вижу нигде, чтобы я привязал, нашёл элемент по ID форму, и она фигурировала.
//А если будет две или три формы на сайте, как JS поймёт, к какой форме что относится?

function handleStore() {
    console.log(window.store);
}

function handleForm(evt) {
    evt.preventDefault();
    
    addCategory(input.value);
    form.input.value = '';
}