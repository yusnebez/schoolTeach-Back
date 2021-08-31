import { Schema, model, Document } from "mongoose";
import mongoose from 'mongoose'

export interface IUser extends Document{
    name: String,
    lastname: String,
    password: any,
    email: String,
}

 const teacherSchema = new Schema({
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
        unique:[ true, 'Este email esta registrado'],
        trim:true
    },
    class:{
        type: String,
        require: true,
        trim:true
    },
    student:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "student"

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

export default model<IUser>('teacher',teacherSchema)