import { Schema, model} from "mongoose";
import mongoose from 'mongoose'

 const subjectSchema = new Schema({

    name:{
        type: String,
        require: true,
        trim:true
    },
    class:{
        type: String,
        require: true,
        trim:true
    },
    notes:{
        type: Number,
        default: 0
    },
    student:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"student"
    },
    teacher:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"teacher"
    }
},{
    versionKey:false,
    timestamps:true
})

export default model('subject',subjectSchema)