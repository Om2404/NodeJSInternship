const http = require('http');

function dataControl(req,resp)
{
    resp.write("<h1>Hello I am Om Patel</h1>");
    resp.end();
}
http.createServer(dataControl).listen(2000);
