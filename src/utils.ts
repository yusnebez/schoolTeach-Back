// import jwt from "jsonwebtoken"
// import { Request, Response, NextFunction} from "express"
// import teachermodels from "./models/teachermodels"


// function authUser (req:Request, res:Response, next:NextFunction) {
    
//     if (!req.headers.token) {
//       res.status(403).json({ error: 'No Token found' })
//     } else {
//       jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
//         if (err) { res.status(403).json({ error: 'Token not valid' }) }
  
//         teachermodels.findOne({ email: token.email })
//           .then(teacher => {
//             res.locals.teacher = teacher
//             next()
//           })
//           .catch(err => res.json(err))
//         })
//       }
//     }
  

//   function handleError (err:ErrorRequestHandler, res:Response) {
//     return res.status(400).json(err)
//   }

//   module.exports = {
//     authUser,
//     handleError 
//   }
  