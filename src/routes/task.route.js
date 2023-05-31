const taskRoute = require('express').Router()
const {schemas} = require('../application/middlewares/task.middleware')

const taskController = require('../application/controllers/task.controller')
const {createTaskMiddleware, taskParamIdMiddleware, validateMiddleware} = require("../application/middlewares/task.middleware");

taskRoute.get('/', taskController.getTasks)

taskRoute.post('/', validateMiddleware(schemas.createTask),  taskController.createTask)

taskRoute.get('/:id', taskParamIdMiddleware, taskController.getTask)

taskRoute.put('/:id', taskParamIdMiddleware, validateMiddleware(schemas.createTask),  taskController.updateTask)

taskRoute.delete('/:id', taskParamIdMiddleware, taskController.deleteTask)


module.exports = {
    taskRoute
}
