// create an http server 


// importing express 
const express = require("express");
const app = express()
const port = 3000

app.get('/', function(req, res) {
    res.send('Hello World!')
})
app.post('/name', function(req, res) {
    console.log(req.headers[`authorization`]);
    res.send({
        'name':`kushal`
    });
})

app.listen(port)