var http = require('http')
var fs = require('fs')
var parseurl = require('./urlparsingmoidule').parseurl;



hostname = '127.0.0.1'
port = '1234'

http.createServer((req,res)=>{
    var action = parseurl(req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if (action === '/append') {
        fs.appendFile('firstappendfile1.txt', 'my first append\n', function (err) {
            if (err) {
                res.write('Error appending to file');
                throw err;
            }
            console.log('Appended to file');
            res.write('Appended to file\n');
            res.end();
        
        });
        fs.readFile('firstappendfile1.txt' ,function(err,data){
            if (err) throw err;
            res.write(`Appended ${data} to the file `);
            res.end();
        });
    } else if (action === '/delete') {
        fs.unlink('firstappendfile1.txt', function (err) {
            if (err) {
                res.write('Error deleting file');
                throw err;
            }
            console.log('Deleted file');
            res.write('Deleted file\n');
            res.end();
        });
    } else {
        res.write('No valid action specified\n');
        res.end();
    }
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

