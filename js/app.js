console.log("Javascrip running");
/* LocalStorage: Nos permite almacenar los datos dentro de la propia memoria del navegador */

document.getElementById('form-task').addEventListener('submit',saveTask);

function saveTask(e){

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value; 


    const task={
        title,description
    }

    /* JSON.stringify() convierte un objeto a un string */

    /* Guardamos datos en el localStorage */
    /* localStorage.setItem('tasks', JSON.stringify(task)); */
    
    /* Obtenemos datos del localStorage con getItem() */
    /* JSON.parse() convierte el string a JSON*/
    /* let data = JSON.parse(localStorage.getItem('tasks')); */

    if (localStorage.getItem('tasks') === null) {
        let tasks=[];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    else{
        /* obtenemos los datos y luego actualizamos atraves del metodo push */
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
getTask();
document.getElementById("form-task").reset();
e.preventDefault();

}

/* Creamos la funcion de eliminar y la ejecutamos en la funcion de getTask */
 function deleteTask(title){
/*     console.log(title); */
 let tasks =JSON.parse(localStorage.getItem('tasks'));

for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title == title) {
        tasks.splice(i,1)
    }
    
}
 localStorage.setItem('tasks',JSON.stringify(tasks));
 getTask();

 }
/* Traemos las tareas que cargamos  */
function getTask(){


    let tasks= JSON.parse(localStorage.getItem('tasks'));
    let tasksView = document.getElementById('tasks');
 
    tasksView.innerHTML = '';


    tasks.forEach((item) => {
        tasksView.innerHTML += `
         <div class="card mb-4">
            <div class="card-body">
                <p> ${item.title} - ${item.description} </p>
                <button class="btn btn-danger" onclick="deleteTask('${item.title}')">Eliminar</button>
                
            </div>
         </div>`
    });



/* Funciona tambien */
/*      for (let i = 0; i < tasks.length; i++) {
         
         let title = tasks[i].title;
         let description = tasks[i].description;

         tasksView.innerHTML += `
         <div class="card mb-4">
            <div class="card-body">
                <p> ${title} - ${description} </p>
                <button class="btn btn-danger" onclick="deleteTask('${title}')">Eliminar</button>
                
            </div>
         </div>`

         
         
     } */
 /* console.log(tasks[i]); */
 }
 getTask();
 




























/*  if(tasksView.innerHTML === ""){
    tasksView.innerHTML = `
    <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">No hay tareas</h4>
            <p>No tienes mandados que hacer</p>
            <hr>
            <p class="mb-0">Si tienes alguna tarea solo rellena el formulario</p>
    </div>
    `
} */