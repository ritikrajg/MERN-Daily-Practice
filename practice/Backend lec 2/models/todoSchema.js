const mongoose=require('mongoose')

const todoSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        }
    },
    {timestamps:true}
)
const Todo=mongoose.model("Tode",todoSchema)
module.exports=Todo