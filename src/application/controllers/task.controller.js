const taskService = require('../services/task.service')


async function getTasks(req, res) {
    const {query} = req
    const tasks = await taskService.getTasks(query)
    return res.json(tasks)
}

async function createTask(req, res) {
    const {body} = req
    await taskService.createTask(body)
    return res.status(201).end()
}


async function getTask(req, res) {
    const {params: {id}} = req
    const task = await taskService.getTask(id)

    return res.json(task)
}

async function updateTask(req, res) {
    const {params: {id}, body} = req
    await taskService.updateTask(id, body)
    return res.end()
}

async function deleteTask(req, res) {
    const {params: {id}} = req
    await taskService.deleteTask(id)
    return res.end()
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask,
}


