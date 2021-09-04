import jwt from "jsonwebtoken"
import { Request, Response, NextFunction} from "express"
import { TeacherModel } from "./models/teachermodels"
import dotenv from 'dotenv'
dotenv.config();


const authUser = (req:Request, res:Response, next:NextFunction) => {
    
    const token = req.header('token')

    if (!token) {
      res.status(403).json({ error: 'No Token found' })
    } else {
      jwt.verify(token,`${process.env.SECRET}`, (err, token) => {
        if (err) { res.status(403).json({ error: 'Token not valid' }) }
        
      const findOk =  TeacherModel.findOne ()
          .then((findOk) => {                                                                                                                                                                                                                                                                                                                                                                                                   
            res.locals.findOk = findOk
            next()
          })
          .catch((err:any) => res.json(err))
        })  
      }
    }

export default authUser