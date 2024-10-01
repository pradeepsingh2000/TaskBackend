
const response = require('../utils/responseUtils')

const validator = (schema,property) => async (req,res,next) =>{
    const { error } = schema.validate(req[property]); // Remove the fallback to 'body'
    const valid = error == null
    if(valid) {
        next()
    }
    else {
        const {details} = error;
        return response.error(res,400,details[0]?.message,details,'Bad Request')
    }
}

module.exports = validator