
const express = require('express');
const app = express();

const reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("Please provide age")
    }
    else if (req.query.age < 18) {
        resp.send("You cannot access this page")
    }
    else {
        next();
    }
}




app.get('/', (req, resp) => {
    resp.send('Welcome to home page')
})

app.get('/users', reqFilter, (req, resp) => {
    resp.send('Welcome to users page')
})

app.get('/about', (req, resp) => {
    resp.send('Welcome to about page')
})

app.listen(8500);