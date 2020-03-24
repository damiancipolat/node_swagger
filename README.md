<img src="https://github.com/damiancipolat/node_swagger/blob/master/doc/logo.png?raw=true" width="200px" align="right" />

# NODE.JS & SWAGGER
Differentes ways of how to handle money values using JS, some recommended libraries and a custom implementation.

I makes this project because I consider that it is necessary to demonstrate how JS in what is the handling of numbers, this in part is due to certain inaccuracies in operations

## Plain files:
They are examples of how to document an api using only text .yml files from a simple project created **MyApi**.

#### **MyApi example**:
- Swagger files: https://github.com/damiancipolat/node_swagger/blob/master/plain/example.yml
- Swagger file & schemas: https://github.com/damiancipolat/node_swagger/blob/master/plain/example_schemas.yml
- Swagger Hub link: https://app.swaggerhub.com/apis/damcipolat-recargapay/Damian-API/base-schemas

## Express & Swagger:
Examples of how to use the module **swagger-ui-express** in an api rest created with node.js.

```sh
npm install
node app.js
```

To change the swagger file go to: /express_swagger/swagger.yml, to see the doc enter: **http://127.0.0.1/doc**

## Express  + JOI + Swagger:
Example of how to use the module **joi-to-swagger** in an api rest created with node.js, here we use joi to define the schema objects.

```sh
npm install
node app.js
```

**TODO:**
- Add api rest.
- Include the swagger doc to the api.
- Add yaml instead of json files.
