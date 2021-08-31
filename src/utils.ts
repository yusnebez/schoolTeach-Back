import jwt, { JwtPayload } from "jsonwebtoken"
import { Request, Response, NextFunction} from "express"
import teacherSchema from "./models/teachermodels"
import dotenv from 'dotenv'
dotenv.config();


const authUser = (req:Request, res:Response, next:NextFunction) => {
    
    if (!req.headers.token) {
      res.status(403).json({ error: 'No Token found' })
    } else {
      jwt.verify(req.headers.token,`${process.env.SECRET}`, (err, token) => {
        if (err) { res.status(403).json({ error: 'Token not valid' }) }
        
        teacherSchema.findOne ()
          .then((teacher:any) => { 
            res.locals.teacher = teacher
            next()
          })
          .catch((err:any) => res.json(err))
        })  
      }
    }

export default authUser