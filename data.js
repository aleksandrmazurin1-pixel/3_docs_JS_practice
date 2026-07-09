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
    const foundStore = window.store.find(element => element.id === categoryId);
    if(foundStore) {
       foundStore.tasks = foundStore.tasks.filter(el => el.id !== taskId);
    } else {
        console.log('Категории не существует!')
    }
    window.dispatchEvent(new Event('storeChanged'));
}



