const dbConnect= require("mongoose");

const deleteData=async ()=>{
let data = await dbConnect();
let result = await data.deleteMany({name:'max 7'})
console.log(result)

}
 
deleteData();