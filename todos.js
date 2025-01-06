const input=document.getElementById('input')
const form=document.getElementById('form')
const listWALAtodo=document.getElementById('todos')

const puranaWALAtodo= JSON.parse(localStorage.getItem('todos'))

if(puranaWALAtodo) {
    puranaWALAtodo.forEach(puranaWALAtodo => addTodo(puranaWALAtodo))
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    addTodo()
})

function addTodo(puranaWALAtodo){
    let todoTEXT=input.value;

    if(puranaWALAtodo){
        todoTEXT=puranaWALAtodo.Text;
    }
 
    const todoELEMENT=document.createElement('li')
    todoELEMENT.innerText=todoTEXT;

    if(puranaWALAtodo && puranaWALAtodo.completed) {
        todoELEMENT.classList.add('completed')
    }

    todoELEMENT.addEventListener('click',()=>{
        todoELEMENT.classList.toggle('completed')
        updateLS();
    })

    todoELEMENT.addEventListener('contextmenu',(e)=>{
        e.preventDefault()
        todoELEMENT.remove()
        updateLS()
    })

    listWALAtodo.appendChild(todoELEMENT)

    input.value='';

    updateLS();
}
function updateLS(){
    let puriLIST=document.querySelectorAll('li');

    const todos=[];
    puriLIST.forEach(list=>{
        todos.push({
            Text : list.innerText,
            completed: list.classList.contains('completed')
        })
    })

    localStorage.setItem('todos',JSON.stringify(todos));
}