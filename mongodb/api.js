const express = require('express');
const dbConnect = require('./mongodb');
const app =express();

app.get('/',(req,resp)=>{
    resp.send({name:'om'})
});

app.listen(5500)