const express = require("express")
const fs = require("fs")
const app = express()


// read all the files present in the current durectory 
const path = require("path");
const directory_loc = path.join('files');

// app.get('/',function(req , res){
//     fs.readdir(directory_loc, (err,data)=>{
//         if (err){
//             res.send(err)
//             return;
//         }
//         else {
//             var files_in_dir =[];
//             data.forEach(file=>{
//                 files_in_dir.push({file});
//             })
//             res.json({files_in_dir})
//         }
//     })
// })

app.get('/files',function(req,res){
    // var a = req.query.a;
    // // Ensure the path does not include extra quotes
    // a = a.replace(/['"]/g, '');
    var a = path.join('files');

    fs.readdir(a, (err, data) => {
        if (err) {
            res.status(500).send(err.toString());
            return;
        } else {
            // Create a string representation of the array of filenames
            const files_in_dir = data.map(file => file).join(', ');
            // Sending the string response
            res.send(files_in_dir);
        }
    });
})

app.get('/files/a.txt',function(req,res){
    var filepath = path.join('files/a.txt')
    fs.readFile(filepath,'utf-8',function(err,data){
        if(err){
            res.status(404).send("File not found")
        }else{
            res.send(data)
        }
    })
})

app.use(function(req,res){
    res.status(404).send("invalid")
})

app.delete('/',function(req,res){
    
})
app.post('/',function(req,res){
    
})

app.listen(3000);