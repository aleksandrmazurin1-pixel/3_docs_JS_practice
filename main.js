

const form = document.getElementById('form');
const input = document.getElementById('input');



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


