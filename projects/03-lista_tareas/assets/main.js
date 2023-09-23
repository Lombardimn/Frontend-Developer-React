// Funcion para el agregado de una tarea a la lista
const addTask = () => {
    const newTaskInput = document.getElementById('newTask');
    const listTask = document.getElementById('listTask');
    const newItem = newTask.value.trim();

    if (newItem !== '') {
        const newTask = document.createElement('LI');
        newTask.textContent = newItem;

        const buttonClear = document.createElement('BUTTON');
        buttonClear.textContent = 'Eliminar';
        buttonClear.className = 'delete';
        buttonClear.onclick = deleteComponet = () =>{
            listTask.removeChild(newTask)
        };

        newTask.appendChild(buttonClear);
        listTask.appendChild(newTask);
        newTaskInput.value = '';
    }
};

// Función para contar elementos
const taskCounting = (value, element) => {
    if (document.querySelector('.counter')) {
        element.removeChild(cuonterElement);
    } else {
        cuonterElement = document.createElement('A');
        cuonterElement.textContent = value;
        cuonterElement.className = 'counter';
        element.appendChild(cuonterElement);
    }
}


// Función para marcar una tarea como completada
const markTaskComplete = (task) => {
    task.classList.toggle('completed');
};

//Funcion para el filtro de tareas pendientes
const displayPending = () => {
    let contElement = 0;
    const listComplete = document.querySelectorAll('LI');
    listComplete.forEach(element => {
        if (element.classList.contains('completed')) {
            if (element.classList.contains('element-hide')) {
                element.classList.remove('element-hide');
            } else {
                element.classList.add('element-hide');
            }
        } else {
            contElement += 1;
        }
    });
    const btnfilterPending = document.getElementById('filterPending')
    taskCounting(contElement, btnfilterPending);
}

//Funcion para el filtro de tareas completadas
const displayComplete = () => {
    let contElement = 0;
    const listComplete = document.querySelectorAll('LI');

    listComplete.forEach(element => {
        if (element.classList.contains('element-hide')){
            element.classList.remove('element-hide');
        } else {
            if (element.classList.contains('completed')){
                contElement += 1;
            } else {
                element.classList.add('element-hide');
            }
        }
    });
    const btnfilterComplete = document.getElementById('filterComplete')
    taskCounting(contElement, btnfilterComplete);
}

// Eventos de filtrado de tareas
document.getElementById('filterPending').addEventListener('click',
displayPending);

document.getElementById('filterComplete').addEventListener('click',
displayComplete);


// Evento para el marcado de las tareas completas
document.getElementById('listTask').addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        markTaskComplete(event.target);
    }
});

// Evento de creacion de tarea
document.getElementById("addTask").addEventListener('click',
addTask);

/* <---------- MODO OSCURO ---------->*/

// Obtener el elemento de entrada checkbox
const inputDarkMode = document.getElementById('dn');

// Función para cambiar al modo oscuro
function activeDarkMode() {
    // Verificar si el checkbox está marcado (valor = true)
    if (inputDarkMode.checked) {
        // Aplicar estilos para el modo oscuro
        document.body.classList.add('dark-mode');
    } else {
        // Quitar estilos del modo oscuro
        document.body.classList.remove('dark-mode');
    }
}

// Escuchar cambios en el checkbox
inputDarkMode.addEventListener('change', activeDarkMode);

// Llamar a la función inicialmente para establecer el estado inicial
activeDarkMode();