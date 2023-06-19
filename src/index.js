import './style.css'
let todoList=[];
class Todo {
    constructor(title, notes, priority, date){
        this.title=title;
        this.notes=notes;
        this.priority=priority;
        this.date=date;
        this.visualRepresentation = 
        `<div>${title}</div>
        <div>${notes}</div>
        <div>${priority}</div>
        <div>${date}</div>
        <div>X</div>`
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
        <div>${todo.date}</div>
        <div>X</div>`
        
        document.querySelector('#content').appendChild(newTodoDisplay);
    }
    const openForm=()=>{
        document.getElementById("popup").style.display = 'block';
    }
    const closeForm=()=>{
        document.querySelector('.todo-form').reset();
        document.getElementById("popup").style.display = 'none';
    }
    const renderFullTodoList = () =>{
        document.querySelector('#content').innerHTML='';
        todoList.forEach((todo)=>{
            let newTodoDisplay = document.createElement('div');
            newTodoDisplay.classList.add('todo');
            newTodoDisplay.innerHTML=`
            <div>${todo.title}</div>
            <div>${todo.notes}</div>
            <div>${todo.priority}</div>
            <div>${todo.date}</div>
            <div>X</div>`
            document.querySelector('#content').appendChild(newTodoDisplay);
            })
        }
    const renderTodayTodoList = () =>{
        document.querySelector('#content').innerHTML='';
        todoList.forEach((todo)=>{
            if(new Date(todo.date)==Date()){ 
                let newTodoDisplay = document.createElement('div');
                newTodoDisplay.classList.add('todo');
                newTodoDisplay.innerHTML=`
                <div>${todo.title}</div>
                <div>${todo.notes}</div>
                <div>${todo.priority}</div>
                <div>${todo.date}</div>
                <div>X</div>`
                document.querySelector('#content').appendChild(newTodoDisplay);
            }
            })
        }
    const renderWeekTodoList = () =>{
        document.querySelector('#content').innerHTML='';
        todoList.forEach((todo)=>{
            if(isThisWeek(new Date(todo.date))){ 
                let newTodoDisplay = document.createElement('div');
                newTodoDisplay.classList.add('todo');
                newTodoDisplay.innerHTML=todo.visualRepresentation;
                document.querySelector('#content').appendChild(newTodoDisplay);
            }
            })
    
        }
        
    return {renderTodo, openForm, closeForm, renderFullTodoList,renderTodayTodoList,renderWeekTodoList};
})();



function addNewTodo(){
    todoList.push(new Todo(document.getElementById('todo-form-title').value,
        document.getElementById('todo-form-notes').value,
        document.querySelector('input[name="todo-priority"]:checked').value,
        document.getElementById('todo-date').value));
    console.log(todoList);
}

const newTodoBtn = document.getElementById('ntodo');
const submitTodo = document.getElementById('enter-todo');
const displayAllTodosBtn = document.getElementById('all-todos');
const displayTodayTodosBtn = document.getElementById('today-todos');
const displayWeekTodosBtn = document.getElementById('week-todos');

newTodoBtn.addEventListener('click', ()=>{
    domManipulation.openForm();
});
submitTodo.addEventListener('click', (e)=>{
    e.preventDefault();
    addNewTodo();
    domManipulation.closeForm();
    domManipulation.renderTodo(todoList[todoList.length-1]);
})

displayAllTodosBtn.addEventListener('click', domManipulation.renderFullTodoList);
displayTodayTodosBtn.addEventListener('click', domManipulation.renderTodayTodoList);
displayWeekTodosBtn.addEventListener('click', domManipulation.renderWeekTodoList);
