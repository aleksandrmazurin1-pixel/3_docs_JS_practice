
/*
Задание 11 — разнести логику на data.js и main.js
Это первое задание блока сборки архитектуры. Начнём без display.js — только два файла плюс HTML.
Создай три файла: index.html, data.js, main.js.
В data.js должно быть:

window.store = [] — глобальный массив категорий
Функция addCategory(name) — создаёт объект категории с id (через crypto.randomUUID()), name и 
пустым массивом tasks, пушит в window.store, и выстреливает событие 'storeChanged'

Функция addTask(categoryId, taskName) — находит категорию через find, добавляет задачу в её tasks 
(тоже с crypto.randomUUID() для id), и выстреливает то же событие 'storeChanged'

В main.js должно быть:

Подписка на событие 'storeChanged' — в обработчике пока просто console.log(window.store) 
(display.js ещё нет, поэтому просто смотрим в консоль)
Обработчик формы добавления категории — читает значение из инпута и вызывает addCategory(...)

В index.html — простая форма с инпутом и кнопкой для добавления категории, и подключение скриптов 
в правильном порядке.
Проверь: введи название категории, нажми кнопку — в консоли должен появиться массив window.store 
с одним объектом внутри. Добавь вторую категорию — массив должен показать два объекта.
Цель этого задания — почувствовать, как data.js и main.js работают вместе без display.js, только 
через событие и консоль.*/



window.store = [];

function addCategory(name) {
    window.store.push({
        id: crypto.randomUUID(),
        name: name,
        tasks: []
    });
    
    window.dispatchEvent(new StorageEvent('storeChanged'));
}


function addTask(categoryId, taskName) {
    const category = window.store.find(cat => cat.name === categoryId);
    console.log('dd')
    if (category) {
        category.tasks.push({
            id: crypto.randomUUID(),
            name: taskName
        });
    } else {
        console.log('Неправильное имя категории!')
    }
}

addCategory('nam444e');
addTask('nam444e', '23tdaskName')

store[0];

