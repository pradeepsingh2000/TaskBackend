
const responseHandler = require('../utils/responseUtils')

const tryCatchFn = (fn) =>{
    return (req,res,next) =>{
        fn(req,res,next).catch((error) => {
         responseHandler.error(
            res,
            400,
            error.message,
            {error}
         )})
        
        }
    }


    module.exports = {tryCatchFn}