
const form = document.getElementById('form');
const input = document.getElementById('input');

const formTask = document.getElementById('formTask');
const inputTask = document.getElementById('inputTask');

parce();
displayCat();

window.addEventListener('storeChanged', displayCat);

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
    if (inputTask.value !== "") {
        const selectedOption = selectorTask.options[selectorTask.selectedIndex];
        const categoryId = selectedOption.dataset.catId;
        addTask(categoryId, inputTask.value);
        inputTask.value = "";
    } else {
        return;
    }

}


