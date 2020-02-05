const Joi = require('@hapi/joi')
module.exports = (data) => {
    const vschema = Joi.object({
        firstName: Joi.string().min(4).max(30).required(),
        lastName: Joi.string().min(4).max(30),
        email: Joi.string().min(4).email(),
        primaryPhoneNumber: Joi.string().min(10).max(13).required(),
        phoneNumbers: Joi.array().items(Joi.string())
    });
    return vschema.validate(data);
};