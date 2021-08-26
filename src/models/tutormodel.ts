import { Schema, model, } from "mongoose";
import mongoose from 'mongoose'

 const tutorSchema = new Schema({
    name:{
        type: String,
        require: true,
        trim:true
    },
    lastname:{
        type: String,
        require: true,
        trim: true
    },
    password:{
        type: String,
        require: true,
        trim:true
    },
    email:{
        type: String,
        require: true,
        trim:true
    },
    teacher:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"teacher"
    },
    student:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "student"
    },
    class:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "class"
    },
    subject:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "subject"
    },
    notes:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"subject"
    },
    coment:{
        type: String,
        trim:true
    },
}, {
    versionKey:false,
    timestamps:true
})

export default model('tutor',tutorSchema)