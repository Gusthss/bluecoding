const taskRepository = require('../repositories/task.repository')


async function getTasks(query) {
    return taskRepository.getTasks(query)
}

async function createTask(task) {
    return taskRepository.createTask(task)
}

async function getTask(id) {
    return taskRepository.getTask(id)
}

async function updateTask(id, body) {
    return taskRepository.updateTask(id, body)
}

async function deleteTask(id) {
    return taskRepository.deleteTask(id)
}


module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask,
}

