const http = require('http');
http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'application\json'});
resp.write(JSON.stringify({ name:'Om Patel', Email: 'om@gmail.com'}));
resp.end()
}).listen(3200);
