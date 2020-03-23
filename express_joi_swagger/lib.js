const j2s = require('joi-to-swagger');

//Build the swagger components.
const translateJoiMap = (schemas) =>{

  //Make a schema map.
  const resultSchema = schemas.map((schemaParam,i)=>{

    //Process the swagger.
    const objSchema  = j2s(schemaParam.schema);

    return {
      name: schemaParam.name,
      ref: objSchema.swagger['$ref'],
      object: objSchema.components.schemas[schemaParam.name]
    };

  });

  return resultSchema;

};

//Compose the components result.
const composeComponents = (list)=>{

  let newComponent = {};

  list.forEach(e=>{

    //Create base object.
    const key   = {};
    key[e.name] = e.object;

    //Compose.
    newComponent = {
      ...newComponent,
      ...key
    };

  });

  return newComponent;

}

//Replace components.
const replaceComponents = (base,components) => base.components = components;

//Replace paths.
const replacePaths = (base, listMap) =>{

  let  final = "";
  let json = JSON.stringify(base.paths);

  listMap.forEach(e=>{
    json = json.replace("@"+e.name+"@",e.ref);
  });

  return JSON.parse(json);

}

//Replace swagger parts.
const composeSwagger = (base,schemas)=>{

  //Receive a list of joi schemas and translate to swagger.
  const swaggerResult = translateJoiMap(schemas);
  const newComponents = composeComponents(swaggerResult);
  const components    = replaceComponents(base,newComponents);
  const paths         = replacePaths(base,swaggerResult);

  base.components = components;
  base.paths = paths;

  return base;

};


module.exports = {
  translateJoiMap,
  composeComponents,
  replaceComponents,
  replacePaths,
  composeSwagger
};