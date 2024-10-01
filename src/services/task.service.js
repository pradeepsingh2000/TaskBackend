const Task = require("../models/task")


const addTask = async(payload) =>{
    try{
        return Task.create(payload) 
    }catch(err) {
        throw err
    }
}

const updateTask = async(id,payload) =>{
    try{
        return Task.findByIdAndUpdate(id,payload) 
    }catch(err) {
        throw err
    }
}

const deleteTask = async(id) =>{
    try{
        return Task.findByIdAndDelete(id)
    }catch(err) {
        throw err
    }
}

const getTask = async(id) =>{
    try{
        return Task.findById(id)
    }catch(err) {
        throw err
    }
}

const getAllTask = async(payload) =>{
    try{
        let {page} = payload
        page = parseInt(page)
        const skip =  (page -1) * 10 
        const totalDoc =await  Task.countDocuments()
        const data = await  Task.find().skip(skip).limit(10)
        const response ={
            data,
            totalDoc
        }
        return response
    }catch(err) {
        throw err
    }
}

module.exports ={addTask,getAllTask,updateTask,getTask,deleteTask}