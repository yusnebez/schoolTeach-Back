import jwt, { JwtPayload } from "jsonwebtoken"
import { Request, Response, NextFunction} from "express"
import { TeacherModel } from "./models/teachermodels"
import dotenv from 'dotenv'
dotenv.config();


const authUser = (req:Request, res:Response, next:NextFunction) => {
    
    // if (!req.headers.token) {
    //   res.status(403).json({ error: 'No Token found' })
    // } else {
    //   jwt.verify(req.headers.token,`${process.env.SECRET}`, (err, token) => {
    //     if (err) { res.status(403).json({ error: 'Token not valid' }) }
        
    //     TeacherModel.findOne ()
    //       .then((Teacher:any) => { 
    //         res.locals.Teacher = Teacher
    //         next()
    //       })
    //       .catch((err:any) => res.json(err))
    //     })  
    //   }
    }

export default authUser