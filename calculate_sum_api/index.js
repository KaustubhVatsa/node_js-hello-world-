const express = require("express")

function calculate_sum(n){
    let sum = 0 ;
    for (var i = 0 ;i<=n ;i++ ){
        sum+=i;
    }
    return sum;
}

const app = express();

app.get('/calculate' ,function(req,res){
    const n = parseInt(req.query.n, 10);
    const ans = calculate_sum(n);
    res.send(ans.toString());
});

app.listen(3000);

// const express = require("express");

// function calculate_sum(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// const app = express();

// app.get('/calculate', function(req, res) {
//     const n = parseInt(req.query.n, 10);
//     if (isNaN(n) || n < 0) {
//         res.status(400).send("Invalid input. Please provide a non-negative integer.");
//     } else {
//         const ans = calculate_sum(n);
//         res.send(ans.toString());
//     }
// });

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });
