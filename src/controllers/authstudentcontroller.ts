import  { StudentModel } from "../models/studentmodel"
import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const signup = async (req:Request, res:Response) => {
    
    try {
        const encryptedPasswd = bcrypt.hashSync(req.body.password, 10)
            const doc = new StudentModel({
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
    
    console.log('estoy aqui')
    console.log(req.body.password)

  const emailfind = StudentModel.findOne({
        email: req.body.email,
        }) 
     
    .then(emailfind => {
     if (emailfind){
     if (bcrypt.compareSync(req.body.password, emailfind.password)){
            const data = { email: emailfind.email, name: emailfind.name}
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

export default {login}