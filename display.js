
/*
Задание 12 — добавляем display.js, который рисует одноуровневый список
Теперь добавляем третий файл — display.js. Пока без вложенности: рисуем только категории, 
без задач внутри них.
В display.js напиши функцию display(), которая:

Находит <ul> на странице через getElementById
Очищает его через innerHTML = ''
Проходит по window.store через forEach
Для каждой категории создаёт <li> с текстом category.name и добавляет в <ul> через append

В main.js замени renderStore() и подписку на 'storeChanged' — теперь вместо console.log вызывай 
display().
В index.html добавь <ul id="list"></ul> и убедись, что порядок подключения скриптов правильный: 
data.js → display.js → main.js.
Проверь: введи название категории, нажми кнопку — категория должна появиться на странице как <li> 
внутри <ul>. Добавь несколько категорий — все должны отображаться.
Цель этого задания — почувствовать, как display.js берёт данные из window.store и рисует их на экране, 
не зная ничего про формы и события.
*/


const list = document.getElementById('list');


function display() {
    list.innerHTML = '';
    window.store.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element.name; 
        list.prepend(li); //Я поставил prepend, Потому что мне нужно, чтобы список со старыми значениями уходил вниз.  
    });
}