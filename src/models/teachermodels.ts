import { Schema, model,} from "mongoose";
import mongoose from 'mongoose'
import { Teacher } from '../interface/interface'

 const schema = new Schema<Teacher>({
    name:{
        type: String,
        require: true,
        trim:true
    },
    lastname:{
        type: String,
        
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
        
        type: [mongoose.Schema.Types.ObjectId],
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

export const TeacherModel = model<Teacher>('Teacher',schema)
