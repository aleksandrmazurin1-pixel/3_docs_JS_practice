


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







