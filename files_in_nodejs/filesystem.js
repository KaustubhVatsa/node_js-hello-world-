var fs = require('fs')
var http = require('http')
const hostname ='127.0.0.1'; //giving local host 
const port =   8080;
http.createServer((req,res)=>{
    res.writeHead =(200,{'Content-type':'text/plain'})
    fs.appendFile('firstappendfile1.txt','my first append' , function (err){
        if (err) throw err;
        console.log('appended new file')
    }) 
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
