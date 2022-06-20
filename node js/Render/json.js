const express = require('express');
const res = require('express');
const app = express();

app.get('', (req, resp) => {
    resp.send('Hello this is our first page');
});

app.get("/about", (req, resp) => {
    resp.send('<input type="text", placeholder="Enter your name" /> <button> Submit</button>')
});

app.get("/help", (req, resp) => {
    resp.send({
        NAME: 'Om Patel',
        EMAIL: 'om@gmail.com'
    
    });
});

app.listen(5100);
