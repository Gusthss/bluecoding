
const Joi = require('joi')
const {number} = require("joi");

function loggerMiddleware(req, res, next) {
    const {url, method} = req

    console.log(`Receiving request to ${method} ${url}`)

    return next();
}


const schemas = {
    createTask: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        completed: Joi.boolean().required(),
    }).required(),
}

const validateMiddleware = (schema) => {
    return (req, res, next) => {
        const {body} = req

        const {error, value} = schema.validate(body)

        if(error)
            return res.status(400).end()

        return next();
    }
}


function taskParamIdMiddleware(req, res, next) {
    const {params} = req

    const idSchema = Joi.object({
        id: Joi.number().required()
    }).required()

    const {error, value} = idSchema.validate(params)

    if(error)
        return res.status(400).end()

    return next();
}


module.exports = {
    loggerMiddleware,
    taskParamIdMiddleware,
    validateMiddleware,
    schemas
}
