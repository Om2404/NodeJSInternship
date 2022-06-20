const dbConnect = require('./mongodb');

dbConnect.then((resp)=>{
    resp.find({name:'node'}).toArray().then((data)=>{
        console.log(data)
    })
})

const main= async ()=>{
    let data = await dbConnect();
    data =await data.find({name:'node'}).toArray();
    console.log(data)
}

main()