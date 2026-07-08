
/*
В main.js — обработчик второй формы, который вызывает addTask.
*/


const form = document.getElementById('form');
const input = document.getElementById('input');

const formTask = document.getElementById('formTask');
const inputTask = document.getElementById('inputTask');



window.addEventListener('storeChanged', display);



form.addEventListener('submit', (evt) => handleForm(evt));

function handleForm(evt) {
    evt.preventDefault();
    if (input.value !== '') {
        addCategory(input.value);
        input.value = '';
    } else {
        return;
    }
}


formTask.addEventListener('submit', (evt) => handleTask(evt));

function handleTask(evt) {
    evt.preventDefault();
    if (inputTask !== "") {
        addTask(inputTask.value);
    } else {
        return;
    }

}