//setup http 
const http = require('node:http');
var dt = require('./myfirstmodule');

// setting up host and port number 
const hostname ='127.0.0.1'; //giving local host 
const port =   8080;


// creating http server 
http.createServer((req ,res )=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.write(`date and time currently are ${dt.my_date_time()}`);
    // res.end ('hello world');   
}).listen(8080);

// server.listen(port,hostname , () =>{
//     console.log(`Server running at http://${hostname}:${port}/`);
// });
