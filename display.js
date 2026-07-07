

/*Задание 14 — очистка лишних DOM-элементов
В прошлом задании ты научился добавлять новые элементы без пересоздания старых. Но есть обратная 
сторона: если категорию удалить из window.store — её <li> останется висеть на экране, потому что 
display() только добавляет, но никогда ничего не удаляет.

Напиши функцию cleanup(), которая решает обратную задачу: находит все <li> на экране с
 data-атрибутом data-cat-id, и для каждого проверяет — есть ли в window.store категория с таким id. 
 Если нет — удаляет этот <li> из DOM.


В display.js обнови функцию display() — пусть она вызывает и существующий умный рендер, и новую 
cleanup().

Проверь: добавь две-три категории, потом удали одну через вызов deleteCategory(id) прямо в 
консоли — <li> должен исчезнуть со страницы.
*/



const list = document.getElementById('list');


function display() {
    window.store.forEach(element => {
        let li = document.querySelector(`[data-cat-id="${element.id}"]`);
        if (!li) {
            li = document.createElement('li');
            li.textContent = element.name;
            li.dataset.catId = element.id;
            list.prepend(li);
        } else {
            li.innerText = element.name;
        }
    });
    console.log(store);
    cleanup();
}

function cleanup() {
    const allDataLi = document.querySelectorAll('[data-cat-id]');
    window.store.forEach(element => {
        if (element.id !== allDataLi) {
            window.store = window.store.filter(ell => ell.id === element.id);
        }
        return;
    });
}