

let todoList=[];
class Todo {
    constructor(title, notes, priority, date){
        this.title=title;
        this.notes=notes;
        this.priority=priority;
        this.date=date;
    }
}

const domManipulation = (()=>{
    const renderTodo = (todo) => {
        let newTodoDisplay = document.createElement('div');
        newTodoDisplay.classList.add('todo');
        newTodoDisplay.innerHTML=`
        <div>${todo.title}</div>
        <div>${todo.notes}</div>
        <div>${todo.priority}</div>
        <div>${todo.date}</div>`
        document.querySelector('#content').appendChild(newTodoDisplay);
    }
    const openForm=()=>{
        document.getElementById("popup").style.display = 'block';
    }
    const closeForm=()=>{
        document.querySelector('.todo-form').reset();
        document.getElementById("popup").style.display = 'none';
    }
//     const renderTodoList = () =>{}
    return {renderTodo, openForm, closeForm};
})();



function addNewTodo(){
    todoList.push(new Todo(document.getElementById('todo-form-title').value,
        document.getElementById('todo-form-notes').value,
        document.querySelector('input[name="todo-priority"]:checked').value,
        document.getElementById('todo-date').value))
    console.log(todoList[0]);
}

const newTodoBtn = document.getElementById('ntodo');
const submitTodo = document.getElementById('enter-todo');
newTodoBtn.addEventListener('click', ()=>{

    domManipulation.openForm();
});
submitTodo.addEventListener('click', (e)=>{
    e.preventDefault();
    addNewTodo();
    domManipulation.closeForm();
    domManipulation.renderTodo(todoList[todoList.length-1]);
})



