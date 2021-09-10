import { Schema, model, } from "mongoose";
import mongoose from 'mongoose'
import { Tutor } from '../interface/interface'

const schema = new Schema<Tutor>({
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

export const TutorModel = model<Tutor>('Tutor',schema)