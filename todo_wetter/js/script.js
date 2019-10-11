let todoNotizen = [];

const todoHinzufuegen = (text) => {
    const todo = {
        text,
        checked: false,
        id: Date.now(),
    };
    
    todoNotizen.push(todo);

    const liste = document.querySelector('.js-todo-liste');
   
    liste.insertAdjacentHTML('beforeend',
      
        `
    <li class="todo-notiz" data-key="${todo.id}">
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="haken js-haken"></label>
    <span>${todo.text}</span>
    <button class="todo-loeschen js-todo-loeschen">
        <svg><use href="#loeschen-knopf"></use></svg>
    </button>
    </li>
    `);
}

const umschaltenAufErledigt = (key) => {
    const index = todoNotizen.findIndex(item => item.id === Number(key));
    todoNotizen[index].checked = !todoNotizen[index].checked;

    const item = document.querySelector(`[data-key='${key}']`);
    if (todoNotizen[index].checked) {
        item.classList.add('erledigt');
    } else {
        item.classList.remove('erledigt');
    }
}

const loescheTodoNotiz = (key) => {
    todoNotizen = todoNotizen.filter(item => item.id !== Number(key));
    const item = document.querySelector(`[data-key='${key}']`);
    item.remove();
}

const formular = document.querySelector('.js-formular');
formular.addEventListener('submit', event => {
    event.preventDefault();
   
    const input = document.querySelector('.js-todo-input');
    const text = input.value.trim();
    if (text !== '') {
        todoHinzufuegen(text);
        input.value = '';
        input.focus();
    }
});

const liste = document.querySelector('.js-todo-liste');
liste.addEventListener('click', event => {
    if (event.target.classList.contains('js-haken')) {
        const itemKey = event.target.parentElement.dataset.key;
        umschaltenAufErledigt(itemKey);
    }

    if (event.target.classList.contains('js-todo-loeschen')) {
        const itemKey = event.target.parentElement.dataset.key;
        loescheTodoNotiz(itemKey);
    }

});
