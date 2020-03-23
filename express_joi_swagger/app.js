
const {
	composeSwagger
} = require('./lib.js');

//Include schemas created with joi.
const schemas = require('./schemas.js');

//Import swagger base file.
const baseDocument = require('./openapi.json');
const newSwagger = composeSwagger(baseDocument,schemas);

//Get the new swagger with values.
console.log('final',newSwagger);

//TODO add apí server, change json to yml.