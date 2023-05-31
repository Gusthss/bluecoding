const express = require('express')
const {taskRoute} = require("./routes/task.route");
const {loggerMiddleware} = require("./application/middlewares/task.middleware");

const server = express()

server.use(express.json())
server.use(express.urlencoded({extended: false}))

server.use(loggerMiddleware)
server.use('/tasks', taskRoute)

const port = process.env.PORT || 80
server.listen(port, () => {
    console.log('server started')
})
