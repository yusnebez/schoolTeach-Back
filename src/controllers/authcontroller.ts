import teacherSchema from "../models/teachermodels"
import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


export const signup = (req:Request, res:Response) => {
    const encryptedPasswd = bcrypt.hashSync(req.body.password, 10)
    teacherSchema.
    create({
        name: req.body.name,
        email: req.body.email,
        password: encryptedPasswd
    })
    .then(teacher => {
        const data = {name: teacher.name, email: teacher.email}
        const token = jwt.sign (data, `${process.env.SECRET}`)
        console.log(token, 'en login')
    
        res.status(200).json({ token: token, ...data})
  
    })

    .catch((err:any)=> res.status(500).json(err))
   
    

}

export const login = (req:Request, res:Response) => {
    teacherSchema
     .findOne({
        email: req.body.email,
    })
    .then(teacher => {
        
        if (teacher){
        if (bcrypt.compareSync(req.body.password, teacher.password)){
            const data = { email: teacher.email, name: teacher.name}
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