const Joi = require("joi")

module.exports={
    validateTask:Joi.object().keys({
        title:Joi.string().required(),
        description:Joi.string().required(),   
    })
}