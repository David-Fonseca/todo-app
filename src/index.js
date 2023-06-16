import './style.css'

let todoList=[];
class Todo {
    constructor(title, notes, priority, date){
        this.title=title;
        this.notes=notes;
        this.priority=priority;
        this.date=date;
    }
}


function openForm(){
    document.getElementById("popup").style.display = 'block';
}

function addNewTodo(){
    todoList.push(new Todo(document.getElementById('todo-form-title').value,document.getElementById('todo-form-notes').value,'high',document.getElementById('todo-date').value))
    console.log(todoList[0]);
}

const newTodoBtn = document.getElementById('ntodo');
const submitTodo = document.querySelector('.enter-Todo');
newTodoBtn.addEventListener('click', ()=>{
    openForm();
});
submitTodo.addEventListener('click', (e)=>{
    e.preventDefault();
    addNewTodo();
    document.querySelector('.todo-form');
})


// const domManipulation = (()=>{
//     const renderTodo = (todo1) => {}
//     const renderTodoList = () =>{}
//     return {renderTodo, renderTodoList};
// })();
