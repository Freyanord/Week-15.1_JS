const form = document.querySelector('#task_form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksGroup');
const emptyList = document.querySelector('#emptyList');

form.addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault();
    const taskText = taskInput.value;
    const taskHTML = `<li class="t-1">
                        <span class="task_itle">${taskText}</span>
                        <input type="checkbox"/>  
                    </li>`;
tasksGroup.insertAdjacentHTML('beforeend', taskHTML); 
taskInput.value = "";
taskInput.focus();

if(tasksGroup.children.length > 1) {
    emptyList.classList.add('none')
};

}
tasksList.addEventListener('clear')
function deleteTask(event) {
    if()
}