const fs =require('fs');
const path = require('path');
const dirPath=path.join(__dirname,'files');


fs.readdir(dirPath,(err,files)=>{
    console.log(files)
})
