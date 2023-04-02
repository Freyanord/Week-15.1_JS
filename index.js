const form = document.querySelector('#task_form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksGroup');
const emptyList = document.querySelector('#emptyList');

form.addEventListener('submit', function (event) {
    //отменяем отправку формы
    event.preventDefault();
    //достаем текст задачи из поля ввода
    const taskText = taskInput.value;
    //формируем разметку для новой задачи
    const taskHTML = `<li class="t-1">
                        <span class="task_title">${taskText}</span>
                        <input type="checkbox"/>  
                    </li>`;
//добавляем задачу на страницу
tasksGroup.insertAdjacentHTML('beforeend', taskHTML); 
//очищаем поле ввода 
taskInput.value = "";
taskInput.focus();

if(tasksGroup.children.length > 1) {
    emptyList.classList.add('none')
};

});
