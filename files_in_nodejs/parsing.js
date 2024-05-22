var http = require('http')
var url = require('url')

function parseresult(){
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/plain'});
    var parsedUrl = url.parse(req.url, true);

    // Return the parsed URL as a string
    var result = JSON.stringify(parsedUrl);
    res.write(result);
    res.end();
}).listen(8080);
}

module.exports.parseresult = parseresult;