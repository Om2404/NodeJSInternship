const dbConnect= require('./mongodb');

const insert  = async ()=>{
    const db=await dbConnect();
    const result =await db.insert(
    {name:'note 3', brand:'oppo', price:3800,category:'mobile'}
    );
}

insert();