const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#taskInput');
let tasksList = document.querySelector('#tasksGroup');
const emptyList = document.querySelector('#emptyList');
const clear = document.querySelector('.delete');

form.addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault();
    const taskText = taskInput.value;
    const taskHTML = `<li class="t-1">
                        <span class="task-itle">${taskText}</span>
                        <input type="checkbox"/>  
                    </li>`;
tasksGroup.insertAdjacentHTML('beforeend', taskHTML); 
taskInput.value = "";
taskInput.focus();

if(tasksGroup.children.length > 1) {
    emptyList.classList.add('none')
};
}

clear.addEventListener ('click', onclick);
function onclick () {
    tasksList.innerHTML = `<div class="empty-list-title">Нет задач</div>`;
}




