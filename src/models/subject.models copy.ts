import { Schema, model} from "mongoose";
import mongoose from 'mongoose'

 const contentSchema = new Schema({
    name:{
        type: String,
        require: true,
        trim:true
    },
    URL:{
        type: String,
        require: true,
        trim:true
    },
    descripcion:{
        type: String,
        trim:true
    },
    class:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "class"
    }
},{
    versionKey:false,
    timestamps:true
})

export default model('content',contentSchema)