const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./dB/connection')
const cors = require('cors')
const routes = require('./routes/task')
require('dotenv').config({path:''})
connection().then(()=>{
    console.log("Data Base connected")
}).catch((err)=>{
    console.log("Error in Connection")
})

app.use(express.json())
app.use(express.raw({type:"application/json"}))
app.use(bodyParser.json())

app.use(cors("*"))

app.use("/api",routes)

app.use((err,req,res,next)=>{
    console.log("Something Went Wrong")
})

const port = 5000

app.listen(port,() =>{
    console.log('Server running in http://localhost:',port)
})