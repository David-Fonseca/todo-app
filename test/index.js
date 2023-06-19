//import {isThisWeek} from 'date-fns';
let projectList=[];
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
class Project{
    constructor(title){
        this.title=title;
        this.todos=[];
    }
    setTodoList = function(listOfTodoTitles){

        listOfTodoTitles.forEach((todoTitle)=>{
            for(let i=0; i<todoList.length;i++){
                if(todoTitle.value===todoList[i].title){
                    this.todos.push(todoList[i]);
                }
            }
            
        })
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
    const openProjectForm=()=>{
        document.querySelector('#checkboxes').innerHTML='';
        todoList.forEach((todo)=>{
            let checkboxInput = document.createElement('input');
            checkboxInput.type="checkbox";
            checkboxInput.Id=`${todo.title}`;
            checkboxInput.value=`${todo.title}`;
            let checkboxLabel = document.createElement('label');
            checkboxLabel.for = `${todo.title}`;
            checkboxLabel.textContent=`${todo.title}`;
            document.querySelector('#checkboxes').appendChild(checkboxInput);               
            document.querySelector('#checkboxes').appendChild(checkboxLabel);
        })
        document.querySelector('.project-popup').style.display='block';
    }
    const closeProjectForm=()=>{
        addNewProject();
        var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
        document.querySelector('.project-form').reset();
        document.getElementById("project-popup").style.display = 'none';
        projectList[projectList.length-1].setTodoList(checkboxes);

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
    
    const renderNewProject = () =>{
        let sideBarForNewProject=document.querySelector('#sidebar');
        let newButtonProject= document.createElement('button');
        newButtonProject.classList.add('projectBtn');
        newButtonProject.textContent=`${projectList[projectList.length-1].title}`;
        sideBarForNewProject.appendChild(newButtonProject);
    }
    const renderProjectTodoList=(projectName)=>{
        document.querySelector('#content').innerHTML='';
        let deleteProjectBtn=document.createElement('button');
        deleteProjectBtn.textContent='Delete Project';
        document.querySelector('#content').appendChild(deleteProjectBtn);

        projectList.forEach((project)=>{
            if(project.title === projectName){
    
                project.todos.forEach((todo)=>{
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
        }
    })
        const delBtns=document.querySelectorAll('#delete-todo');
        delBtns.forEach((delBtn)=>{
            delBtn.addEventListener('click',(e)=>{
                e.target.parentNode.remove();
                removeFromList(parseInt(e.target.parentNode.classList[1]))
                })
            })

        //deleteProjectBtn.addEventListener('click',deleteProject(projectName))
    }
    const deleteProject=(nameOfProjectToDelete)=>{
        const allProjectBtns = document.querySelectorAll('.projectBtn');
        allProjectBtns.forEach((projectBtn)=>{
            if(projectBtn.textContent===nameOfProjectToDelete){
                renderFullTodoList();
                projectBtn.remove();
            }
        })
    }

    return {renderProjectTodoList,closeProjectForm,openProjectForm,renderNewProject,renderTodo, openForm, closeForm, renderFullTodoList,renderTodayTodoList,renderWeekTodoList};
})();



function addNewTodo(){
    todoList.push(new Todo(document.getElementById('todo-form-title').value,
        document.getElementById('todo-form-notes').value,
        document.querySelector('input[name="todo-priority"]:checked').value,
        document.getElementById('todo-date').value,
        todoList.length));
    

}
function addNewProject(){
    projectList.push(new Project(document.getElementById('project-form-title').value))
}

const newTodoBtn = document.getElementById('ntodo');
const submitTodo = document.getElementById('enter-todo');
const displayAllTodosBtn = document.getElementById('all-todos');
const displayTodayTodosBtn = document.getElementById('today-todos');
const displayWeekTodosBtn = document.getElementById('week-todos');
const newProjectBtn = document.getElementById('new-project');
const submitProjectBtn = document.getElementById('enter-project-btn');
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
    domManipulation.openProjectForm();
});
submitProjectBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    domManipulation.closeProjectForm();
    domManipulation.renderNewProject();
    const projectBtns = document.querySelectorAll('.projectBtn');

    projectBtns.forEach((projectBtn)=>{
  
        projectBtn.addEventListener('click',(e)=>{
        domManipulation.renderProjectTodoList(e.target.textContent)})
    })
})


