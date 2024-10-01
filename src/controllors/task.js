
const {tryCatchFn} = require('../helper/helper')
const { addTask, updateTask, deleteTask, getAllTask, getTask } = require('../services/task.service')
const { success } = require('../utils/responseUtils')


const add = tryCatchFn(async(req,res,next) =>{
    const data = await addTask(req.body)
    return success(
        res,
        201,
        'Task Added',
        data
    )
})

const update = tryCatchFn(async(req,res,next) =>{
    const {id} = req.params
    const data = await updateTask(id,req.body)
    return success(
        res,
        200,
        'Update Added',
        data
    )
})

const deleted = tryCatchFn(async(req,res,next) =>{
    const {id} = req.params
    const data = await deleteTask(id)
    return success(
        res,
        201,
        'Task Deleted',
        data
    )
})

const getAll = tryCatchFn(async(req,res,next) =>{
    const data = await getAllTask(req.query)
    return success(
        res,
        200,
        'Success',
        data
    )
})

const get = tryCatchFn(async(req,res,next) =>{
    const {id} = req.params(id)
    const data = await getTask()
    return success(
        res,
        201,
        'Success',
        data
    )
})


module.exports={add,deleted,update,get,getAll}