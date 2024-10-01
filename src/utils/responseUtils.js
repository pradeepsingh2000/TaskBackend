
module.exports.success = (res,status,message,data)=>{
    res.status(status).send({
        success:true,
        message,
        data
    })
}

module.exports.error = (res,status,message,data,error = null)=>{
    res.status(status).send({
        success:false,
        message,
        data,
        error
    })
}