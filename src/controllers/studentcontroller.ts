import { StudentModel } from "../models/studentmodel"
import handleError from "../handlerError"
import {Response,Request} from "express"

export const createStudent = (req:Request, res:Response) => {
    
    StudentModel
    .create({
        name: req.body.name,
        email: req.body.email,
        lastname: req.body.lastname,

    })
    .then((response:any) => res.json(response))
    .catch((err:any) => handleError(err, res))
 }


export const getbyEmail = (req:Request, res:Response) => {
    StudentModel
    .findOne(req.query)
    .then((response: any) => res.json(response))
    .catch((err: any) => handleError(err, res))
   

 }

export const getAllStudents = (req:Request, res:Response) => {
    StudentModel
    .find()
    .then((response: any) => res.json(response))
    .catch((err: any) => handleError(err, res))
}

export const getStudentById = (req:Request, res:Response) => {
    StudentModel
    .findById(req.body.email)
    .then((response:any) => res.json(response))
    .catch((err: any) => handleError(err, res))

 }

export const addSubject = (req:Request, res:Response) => {
    StudentModel
    .findById(req.params.id)
    .then((response:any) => {
        response.subjects.push({
            info: req.params.subjectId
        })
        response.save()

    })
    .catch((err: any) => handleError(err, res))

 }

export const updateStudent = (req:Request, res:Response) => {
    StudentModel
    .findByIdAndUpdate(req.params.id)
    .then((response:any) => res.json(response))
    .catch((err:any) => handleError(err, res))

}

export const deleteStudentById = (req:Request, res:Response) => {
    StudentModel
    .findByIdAndRemove(req.params.id)
    .then((response:any) => res.json(response))
    .catch((err:any) => handleError(err, res))

 }
