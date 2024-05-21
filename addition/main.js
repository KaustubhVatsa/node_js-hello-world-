var http = require('node:http');
var add = require("./addition_func");
var url = require('node:url');
const hostname ='127.0.0.1'; //giving local host 
const port =   8080;
// creating a local server
http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/plain');
    // parsing the url
    const queryObject = url.parse(req.url, true).query;
    let a = parseFloat(queryObject.a);
    let b = parseFloat(queryObject.b);
    if (!isNaN(a) && !isNaN(b)) {
        res.write(`The result of addition of ${a} and ${b} is = ${add.add(a, b)}`);
    } else {
        res.write('Please provide valid numbers for "a" and "b" in the query parameters.');
    }
    res.end();
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

