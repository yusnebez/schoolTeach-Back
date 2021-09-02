import  { TeacherModel } from "../models/teachermodels"
import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'



export const signup = async (req:Request, res:Response) => {
    
    try {
        const encryptedPasswd = bcrypt.hashSync(req.body.password, 10)
            const doc = new TeacherModel({
                name: req.body.name,
                email: req.body.email,
                password: encryptedPasswd
             });
        await doc.save();
        
        const data = {name: doc.name, email: doc.email}
        const token = jwt.sign (data, `${process.env.SECRET}`)
        res.status(200).json({ token: token, ...data})
    
    } catch(e) {
        console.log(e)
    }
}

export const login = (req:Request, res:Response) => {
    
    

     TeacherModel.findOne({
        email: req.body.email,

    })

    .then(Teacher => {
        
        if (Teacher){
        if (bcrypt.compareSync(req.body.password, Teacher.password)){
            const data = { email: Teacher.email, name: Teacher.name}
            const token = jwt.sign (data, `${process.env.SECRET}`)
            console.log(token)
            
            res.status(200).json({ token: token, ...data})
            }
        else {

            res.send('Email no register')

    }

        }
     
     })
    .catch((err: any)=> res.status(500).json(err))

}

export default { signup, login}