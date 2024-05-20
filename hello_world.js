//setup http 
const http = require('node:http');


// setting up host and port number 
const hostname ='127.0.0.1'; //giving local host 
const port =   8080;


// creating http server 
const server = http.createServer((req ,res )=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end ('hello world');   
});

server.listen(port,hostname , () =>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
