const form = document.querySelector('#task_form');
const taskInput = document.querySelector('#taskInput');

form.addEventListener('submit', function (event) {
    //отменяем отправку формы
    event.preventDefault();
    //достаем текст задачи из поля ввода
    const taskText = taskInput.value;
    //формируем разметку для новой задачи
    


})