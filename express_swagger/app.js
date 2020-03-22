//Include api modules.
const http       = require('http');
const express    = require('express');
const bodyParser = require('body-parser');
const swaggerUi  = require('swagger-ui-express');
const YAML 			 = require('yamljs');

//Start Express-js
const app    = express();
const server = http.createServer(app);

const PORT = 8080;
const IP   = '127.0.0.1';

//Load yaml file.
const swaggerDocument = YAML.load('./swagger.yml');

//Add body parser.
app.use(bodyParser.json());

//Add swagger middleware.
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Route endpoints.
app.get('/employes/:id',(req,res)=>{
  res.json({ok:true});
});

app.get('/employes/:id',(req,res)=>{
  res.json({ok:true});
});

app.post('/employes/',(req,res)=>{
  res.json({ok:true});
});

//404
app.get('*',(req,res)=>{
  res.status(400).json({"error":"bad request"});
});

//Listen mode.
app.listen(PORT,IP	,()=>{
	console.log('Server started in port:',PORT,'ip:',IP);
	console.log('Server started...');
	console.log('Doc: http://127.0.0.1/doc');
});

