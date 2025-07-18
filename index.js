

const express = require('express');

const app = express();

app.get('/',(req, res) => {
    return res.send('Hello home page');
})

app.get('/about', (req, res) => {
    return res.send('Hello about page');
})

app.get('/contact', (req, res) => {
    // console.log(req);
    return res.send('Hello contact page '+req.query.name1);
    
})

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});

