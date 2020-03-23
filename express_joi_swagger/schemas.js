const joi = require('@hapi/joi');

const user = joi.object().keys({
  id:      joi.number().integer().positive().required(),
  name:    joi.string(),
  email:   joi.string().email().required(),
  created: joi.date().allow(null),
  active:  joi.boolean().default(true),
}).meta({className:'user'});

const client = joi.object().keys({
  id:      joi.number().integer().positive().required(),
  name:    joi.string(),
  email:   joi.string().email().required(),
  created: joi.date().allow(null),
  active:  joi.boolean().default(true),
}).meta({className:'client'});

module.exports = [
  {name:'user',schema:user},
  {name:'client',schema:client},
];