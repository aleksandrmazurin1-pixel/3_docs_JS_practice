

/*
В display.js — внутри цикла по категориям добавь вложенный рендер задач. Каждая категория должна 
содержать свой <ul> со списком задач, и у каждого <li> задачи — свой data-атрибут data-task-id. 
Умный рендер и cleanup должны работать на обоих уровнях — и для категорий, и для задач внутри 
каждой категории.
*/



const list = document.getElementById('list');
const selectorTask = document.getElementById('selectorTask');




function displayCat() {
    window.store.forEach(element => {
        let optionTask = document.querySelector(`[data-cat-id="${element.id}"]`);
        if (!optionTask) {
            optionTask = document.createElement('option');
            optionTask.textContent = element.name;
            optionTask.dataset.catId = element.id;
            selectorTask.prepend(optionTask);
        } else {
            optionTask.innerText = element.name;
        }
        displayTask(element.id)
    });
    console.log(window.store);
    cleanup();
}



function displayTask(categoryId) {
    window.store.forEach(element => {
        if (element.id === categoryId) {
            element.tasks.forEach(task => {
                let li = document.querySelector(`[data-task-id="${task.id}"]`);
                if (!li) {
                    li = document.createElement('li');
                    li.textContent = task.name;
                    li.dataset.taskId = task.id;
                    list.prepend(li);
                }
            });
        }
    });
}


function cleanup() {
    const allDataLi = document.querySelectorAll('[data-cat-id]');
    allDataLi.forEach(element => {
        const elementStore = window.store.find(el => el.id === element.dataset.catId);
        if (!elementStore) {
            element.remove();
        }
    });
}




