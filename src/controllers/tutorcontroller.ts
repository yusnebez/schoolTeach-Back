import tutorSchema from "../models/tutormodel"
import handleError from "../handlerError"
import {Response,Request} from "express"

export const createTutor = (req:Request, res:Response) => {
    
    tutorSchema
    .create({
        name: req.body.name,
        email: req.body.email,
        lastname: req.body.lastname,

    })
    .then((response:any) => res.json(response))
    .catch((err:any) => handleError(err, res))
 }


export const getbyEmail = (req:Request, res:Response) => {
    tutorSchema
    .findOne(req.query)
    .then((response: any) => res.json(response))
    .catch((err: any) => handleError(err, res))
   

 }

export const getAllTutor = (req:Request, res:Response) => {
    tutorSchema
    .find()
    .then((response: any) => res.json(response))
    .catch((err: any) => handleError(err, res))
}

export const getTutorById = (req:Request, res:Response) => {
    tutorSchema
    .findById(req.body.email)
    .then((response:any) => res.json(response))
    .catch((err: any) => handleError(err, res))

 }

export const addSubject = (req:Request, res:Response) => {
    tutorSchema
    .findById(req.params.id)
    .then((response:any) => {
        response.subjects.push({
            info: req.params.subjectId
        })
        response.save()

    })
    .catch((err: any) => handleError(err, res))

 }

export const updateTutor = (req:Request, res:Response) => {
    tutorSchema
    .findByIdAndUpdate(req.params.id)
    .then((response:any) => res.json(response))
    .catch((err:any) => handleError(err, res))

}

export const deleteTutorById = (req:Request, res:Response) => {
    tutorSchema
    .findByIdAndRemove(req.params.id)
    .then((response:any) => res.json(response))
    .catch((err:any) => handleError(err, res))

 }