

const list = document.getElementById('list');
const selectorTask = document.getElementById('selectorTask');




function displayCat() {
    window.store.forEach(element => {
        let optionTask = document.querySelector(`[data-cat-id="${element.id}"]`);
        if (!optionTask) {
            optionTask = document.createElement('option');
            optionTask.textContent = element.name;
            optionTask.dataset.catId = element.id;
            selectorTask.append(optionTask);
        } else {
            optionTask.innerText = element.name;
        }
        displayTask(element.id)
    });
    console.log(window.store);
    cleanupCat();
}



function displayTask(categoryId) {//В displayTask задача та же самая по духу, но с одним дополнительным 
    // шагом. Задачи не лежат напрямую в window.store — они лежат внутри конкретной категории, в её tasks. 
    // Поэтому прежде чем перебирать задачи, нужно сначала найти нужную категорию.
    window.store.forEach(element => {
        if (element.id === categoryId) {
            element.tasks.forEach(task => {
                let li = document.querySelector(`[data-task-id="${task.id}"]`);
                if (!li) {
                    li = document.createElement('li');
                    li.textContent = task.name;
                    li.dataset.taskId = task.id;
                    list.append(li);

                    const delTaskBtn = document.createElement('button');
                    delTaskBtn.innerText = 'Del';
                    li.append(delTaskBtn);

                    delTaskBtn.addEventListener('click', () => {
                        deleteTask(categoryId, task.id);
                    });
                }
            });
            cleanupTask(categoryId);
        }
    });

}


function cleanupCat() {
    const allCat = document.querySelectorAll('[data-cat-id]');
    allCat.forEach(element => {
        const elementStore = window.store.find(el => el.id === element.dataset.catId);
        if (!elementStore) {
            element.remove();
        }
    });
}


function cleanupTask(categoryId) {
    const elementStore = window.store.find(el => el.id === categoryId);
    if (elementStore) {
        const allTasks = document.querySelectorAll('[data-task-id]');
        allTasks.forEach(task => {
            const elementTask = elementStore.tasks.find(ts => ts.id === task.dataset.taskId)
            if (!elementTask) {
                task.remove();
            }
        });
    }
}

