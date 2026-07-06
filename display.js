const list = document.getElementById('list');

function renderTask() {
    list.innerText = '';
    window.tasks.forEach(element => {
        const li = document.createElement('li');
        li.innerText = element;
        list.prepend(li);

        const btnDel = document.createElement('button');
        btnDel.innerText = 'X';
        li.appendChild(btnDel);
        btnDel.addEventListener('click', () => {
          window.dispatchEvent(new CustomEvent('liBtnDel', {detail: element})); //Он здесь кастомный, потому что нужно уже начинать передавать имя. 
        });
    });
}



