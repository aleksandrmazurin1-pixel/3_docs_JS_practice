/*
В data.js — функция deleteTask(categoryId, taskId) уже 
писалась в задании 10, просто перенеси её сюда с dispatchEvent.
*/


window.store = [];

function addCategory(name) {
    window.store.push({
        id: crypto.randomUUID(),
        name: name,
        tasks: []
    });
    
    window.dispatchEvent(new Event('storeChanged'));
}


function addTask(categoryId, taskName) {
    const category = window.store.find(cat => cat.id === categoryId);
    if (category) {
        category.tasks.push({
            id: crypto.randomUUID(),
            name: taskName
        });
    } else {
        console.log('Неправильное имя категории!')
    }
    window.dispatchEvent(new Event('storeChanged')); 
}


function deleteCategory(categoryId) {
    window.store = window.store.filter(element => element.id !== categoryId);
    window.dispatchEvent(new Event('storeChanged'));
}


function deleteTask(categoryId, taskId) {
    window.store = window.store.filter(element => element.id !== categoryId);
    window.store = window.store.filter(element => element.id !== taskId);
    
}



