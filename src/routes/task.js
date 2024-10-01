
const express = require('express')
const route = express.Router()
const validator = require('../middleware/middleware')
const Schema = require('../Validation/task')
const { add, getAll,get, deleted, update } = require('../controllors/task')


route.post("/tasks",
    validator(Schema.validateTask),
    add
)
route.get("/tasks",getAll)
route.get('/tasks/:id',get)
route.delete('/tasks/:id',deleted)
route.put('/tasks/:id',update)


module.exports = route