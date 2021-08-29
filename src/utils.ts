import jwt from "jsonwebtoken"
import { Request, Response, NextFunction} from "express"
import teacherSchema from "./models/teachermodels"
import dotenv from 'dotenv'
dotenv.config();

function authUser (req:Request, res:Response, next:NextFunction) {
    
    if (!req.headers.token) {
      res.status(403).json({ error: 'No Token found' })
    } else {
      jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
        if (err) { res.status(403).json({ error: 'Token not valid' }) }
  
        teacherSchema.findOne ({ email: token.email })
          .then((teacher: any) => {
            res.locals.teacher = teacher
            next()
          })
          .catch((err: any) => res.json(err))
        })
      }
    }
  

  function handleError (err:any, res:Response) {
    return res.status(400).json(err)
  }

  export default {handleError,authUser}
  