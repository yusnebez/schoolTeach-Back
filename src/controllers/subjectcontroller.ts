import subjectSchema from "../models/subjectmodels"
import handleError from "../handlerError"
import {Response,Request} from "express"

export const createSubject = (req:Request, res:Response) => {
    subjectSchema
    .create({
        name: req.body.name,
        
    })
    .then((response: any) => res.json(response))
    .catch((err:any) => handleError(err, res))
}

export const getAllSubjects = (req:Request, res:Response) => {
    subjectSchema
    .find()
    .then((response: any) => res.json(response))
    .catch((err:any) => handleError(err, res))
}

export const getSubjectById = (req:Request, res:Response) => {
    subjectSchema
    .findById(req.params.id)
    .then((response:any) => res.json(response))
    .catch((err:any) => handleError(err, res))

}

export const updateSubject = (req:Request, res:Response) => {
    subjectSchema
    .findByIdAndUpdate(req.params.id, req.body)
    .then((response:any) => res.json(response))
    .catch((err:any) => handleError(err, res))

}

export const deleteSubjectById = (req:Request, res:Response) => {
    subjectSchema
    .findByIdAndDelete(req.params.id)
    .then((response:any) => res.json(response))
    .catch((err:any) => handleError(err, res))

}