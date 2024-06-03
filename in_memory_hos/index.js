var users = [{
    name : "John" ,
    kidneys :[{
        healthy: false
    },{
        healthy: true
    }]
}]
// console.log(users[0]);

const express = require('express');
const app = express();
app.use(express.json());
app.get('/', function(req,res){
    var username = users[0].name;
    var userkidney = users[0].kidneys;
    var count = userkidney.length;
    var number_of_healthy_kidneys = 0 ;
    var number_of_unhealthy_kidneys =0;
    for (let i = 0 ;i<userkidney.length; i++){
        if(userkidney[i].healthy){
            number_of_healthy_kidneys++;
        }
        else {
            number_of_unhealthy_kidneys++;
        }
    }
    res.json({
        username,
        count,
        number_of_healthy_kidneys,
        number_of_unhealthy_kidneys
    })
})

app.put('/', function(req,res){
    for (var i = 0 ;i < users[0].kidneys.length ;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.send("user is healthy");
})

app.post('/', function(req,res){
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy:ishealthy
    })
    res.send("done");
})

app.delete('/', function(req,res){
    //deletin all the unhealthy kidneys . 
    const onlyhealthykidneys = [];
    for (var i = 0 ;i < users[0].kidneys.length ;i++){
        if (users[0].kidneys[i].healthy){
            onlyhealthykidneys.push({
                healthy:true
            })
        }

    }
    users[0].kidneys = onlyhealthykidneys;
    res.send("all unhealthy kidneys removed");

})

app.listen(3001);