const todoInput = document.querySelector('.input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.items');
const filterOption = document.querySelectorAll('.todo-filter')[0];

todoButton.addEventListener('click', addTask);
todoButton.addEventListener('keypress = "Enter', addTask);
todoList.addEventListener('click', deleteItem);
filterOption.addEventListener('click' , todoFilter);

function addTask(e)
{
    e.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const todoItems = document.createElement('li');
    todoItems.classList.add('tasks');
    todoItems.innerText=todoInput.value;
    todoDiv.appendChild(todoItems);

    const checkButton = document.createElement('button');
    checkButton.classList.add('check-btn');
    checkButton.innerHTML= '<i class="fas fa-check"></i>';
    todoDiv.appendChild(checkButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(deleteButton);

    todoList.appendChild(todoDiv);

    todoInput.value = "";

}

function deleteItem(e)
{
    const item = e.target;
    if(item.classList[0] === "delete-btn")
    {
        const deleteEvent = item.parentElement;
        deleteEvent.classList.toggle("fall");
        deleteEvent.addEventListener('transitionend' , function(){
            deleteEvent.remove();
        })

    }

    if(item.classList[0] === "check-btn")
    {
        const completeEvent = item.parentElement;
        completeEvent.classList.toggle("completed");
    }
}

function todoFilter(e) 
{
    const todos = todoList.childNodes ;
    //console.log(todos);
    todos.forEach(function(todo)
    {
        switch (e.target.value) 
        {
            case "all" :
                todo.style.display = 'flex';
                break;
            case "completed" :
                if(todo.classList.contains("completed"))
                {
                    todo.style.display = 'flex';
                }
                else
                {
                    todo.style.display = 'none';
                }
                break;
            case "pending" :
                if(!todo.classList.contains("completed"))
                {
                    todo.style.display = 'flex';
                }
                else
                {
                    todo.style.display = 'none';
                }   
                break;
        }
    }); 
}



