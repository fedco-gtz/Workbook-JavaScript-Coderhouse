let tareas = [];

for (let i = 0; i < 5; i++) {
    let tarea = prompt(`Igresa la tarea ${i+1}:`);
    tareas.push(tarea);
}


let ul = document.createElement(`ul`);

tareas.forEach(function(tarea) {
    let li = document.createElement(`li`);
    li.textContent = `Tarea: ${tarea}`;
    ul.appendChild(li);
});

document.body.appendChild(ul);