
const express = require('express');
const res = require('express');
const app = express();

app.get("", (req, resp) => {
    resp.send('<h1>Hello this is our first page</h1><a href="/about" > Go to about page</a> ');
});

app.get("/about", (req, resp) => {
    resp.send('<input type="text", placeholder="Enter your name" /> <button> Submit</button>  <a href="/" > Go to home page</a>');
});

app.get("/help", (req, resp) => {
    resp.send({
        NAME: 'Om Patel',
        EMAIL: 'om@gmail.com'
    
    });
});

app.listen(3000);
