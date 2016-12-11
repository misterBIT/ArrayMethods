// Array.prototype.some() / every()

var tasks = [   
    {
        title: 'Do homework',
        completed: true
    },
    {
        title: 'Feed the fish',
        completed: true
    },
    {
        title: 'Smile to stranger',
        completed: true
    }
];

var list = document.querySelector('.task-list');

list.innerHTML = tasks
.map(x => x.completed ? `<s>${x.title}</s>` : x.title)
.map(x => `<li>${x}</li>`)
.join('');

if (tasks.every(task => task.completed)) {
    list.classList.add('completed');
}
