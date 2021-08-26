import { Schema,model } from "mongoose";
import mongoose from "mongoose"

const classSchema = new Schema ({
    name:{
        type:String,
        require: true,
        trim: true
    },
    subject:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "subject"
    },
    notes:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "subject"
    },
    student:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "student" 
    },
    teacher:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "teacher"
    },
    tutor:{
        types:mongoose.Schema.Types.ObjectId,
        ref: "tutor"
    },
    content:{
        types:mongoose.Schema.Types.ObjectId,
        ref: "content"
    }
},{
    versionKey: false,
    timestamps: true
})

    export default model ('class',classSchema)