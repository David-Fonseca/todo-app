//import {isThisWeek} from 'date-fns';

let todoList=[];
class Todo {
    constructor(title, notes, priority, date,index){
        this.title=title;
        this.notes=notes;
        this.priority=priority;
        this.date=date;
        this.index=index;
        this.visualRepresentation = 
        `<div>${title}</div>
        <div>${notes}</div>
        <div>${priority}</div>
        <div>${date}</div>
        <button id="delete-todo">X</button>`
    }

}
function removeFromList(index){
    for(let i = index+1; i<todoList.length - 1; i++){
        todoList[i].index--;
    }
    todoList.splice(index,1);
}
const domManipulation = (()=>{
    const renderTodo = (todo) => {
        console.log(todo);
        let newTodoDisplay = document.createElement('div');
        newTodoDisplay.classList.add('todo');
        newTodoDisplay.classList.add(`${todo.index}`);
        newTodoDisplay.innerHTML=`
        <div>${todo.title}</div>
        <div>${todo.notes}</div>
        <div>${todo.priority}</div>
        <div>${todo.date}</div>
        <button id="delete-todo">X</button>`
        
        document.querySelector('#content').appendChild(newTodoDisplay);
        const delBtns=document.querySelectorAll('#delete-todo');
        delBtns.forEach((delBtn)=>{
            console.log
            delBtn.addEventListener('click',(e)=>{
                e.target.parentNode.remove();
                removeFromList(parseInt(e.target.parentNode.classList[1]))
            })
        })
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
            newTodoDisplay.classList.add(`${todo.index}`);
            newTodoDisplay.innerHTML=`
                <div id="todo-title">${todo.title}</div>
                <div>${todo.notes}</div>
                <div>${todo.priority}</div>
                <div>${todo.date}</div>
                <button id="delete-todo">X</button>`
            document.querySelector('#content').appendChild(newTodoDisplay);
            })
            
            const delBtns=document.querySelectorAll('#delete-todo');
            delBtns.forEach((delBtn)=>{
                delBtn.addEventListener('click',(e)=>{
                    e.target.parentNode.remove();
                    removeFromList(parseInt(e.target.parentNode.classList[1]))
                })
            })
        }
    const renderTodayTodoList = () =>{
        document.querySelector('#content').innerHTML='';
        todoList.forEach((todo)=>{
            if(new Date(todo.date)==Date()){ 
                let newTodoDisplay = document.createElement('div');
                newTodoDisplay.classList.add('todo');
                newTodoDisplay.classList.add(`${todo.index}`);
                newTodoDisplay.innerHTML=`
                <div>${todo.title}</div>
                <div>${todo.notes}</div>
                <div>${todo.priority}</div>
                <div>${todo.date}</div>
                <button id="delete-todo">X</button>`
                document.querySelector('#content').appendChild(newTodoDisplay);
            }
            })
        const delBtns=document.querySelectorAll('#delete-todo');
        delBtns.forEach((delBtn)=>{
            delBtn.addEventListener('click',(e)=>{
                e.target.parentNode.remove();
                removeFromList(parseInt(e.target.parentNode.classList[1]))
                })
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
    
    const addNewProject = () =>{
        document.querySelector('#sidebar');
    }

    return {addNewProject,renderTodo, openForm, closeForm, renderFullTodoList,renderTodayTodoList,renderWeekTodoList};
})();



function addNewTodo(){
    todoList.push(new Todo(document.getElementById('todo-form-title').value,
        document.getElementById('todo-form-notes').value,
        document.querySelector('input[name="todo-priority"]:checked').value,
        document.getElementById('todo-date').value,
        todoList.length));
    
    console.log(todoList);
}

const newTodoBtn = document.getElementById('ntodo');
const submitTodo = document.getElementById('enter-todo');
const displayAllTodosBtn = document.getElementById('all-todos');
const displayTodayTodosBtn = document.getElementById('today-todos');
const displayWeekTodosBtn = document.getElementById('week-todos');
const newProjectBtn = document.getElementById('new-project');
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
newProjectBtn.addEventListener('click',()=>{
    projectForm=document.querySelector('.project-form');
    
});

