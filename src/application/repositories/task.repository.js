

let tasks = [
    {
        id: 1,
        title: 'title',
        description: 'description',
        completed: 'true',
    },
    {
        id: 2,
        title: 'title2',
        description: 'description2',
        completed: 'false',
    }
]

async function getTasks(query) {
    let {page = 1, limit= 50, next, previous} = query

    limit = +limit

    let totalPages = 1;
    let paginatedItems = tasks
    if (limit < tasks.length) {
        const startIndex = (page- 1) * limit;
        const endIndex = startIndex + limit;
        paginatedItems = tasks.slice(startIndex, endIndex);
    }

    return {tasks: paginatedItems, page}
}

async function createTask(task) {
    const x = {id: tasks[tasks.length - 1].id + 1, ...task}
    tasks.push(x)
}

async function getTask(id) {
    return tasks.filter(task => task.id === +id)[0]
}

async function updateTask(id, body) {
    for (const [index, task] of tasks.entries()) {
        if(task.id === +id) {
            tasks[index] = {...task, ...body}
            return;
        }
    }
    tasks.push({id, ...body})
}

async function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === +id)
    tasks.splice(index, 1)
}


module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask,
}

