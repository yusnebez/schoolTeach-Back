import studentModel from "../models/studentmodel"
import handleError from "../handlerError"
import {Response,Request} from "express"

export const createStudent = (req:Request, res:Response) => {
    
    studentModel
    .create({
        name: req.body.name,
        email: req.body.email,
        lastname: req.body.lastname,

    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
 }


export const getbyEmail = (req:Request, res:Response) => {
    studentModel
    .findOne(req.query)
    .then((response: any) => res.json(response))
    .catch((err: any) => handleError(err, res))
   

 }

export const getAllStudents = (req:Request, res:Response) => {
    studentModel
    .find()
    .then((response: any) => res.json(response))
    .catch((err: any) => handleError(err, res))
}

export const getStudentById = (req:Request, res:Response) => {
    studentModel
    .findById(req.body.email)
    .then((response:any) => res.json(response))
    .catch((err: any) => handleError(err, res))

 }

export const addSubject = (req:Request, res:Response) => {
    studentModel
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
    studentModel
    .findByIdAndUpdate(req.params.id)
    .then((response:any) => res.json(response))
    .catch((err:any) => handleError(err, res))

}

export const deleteStudentById = (req:Request, res:Response) => {
    studentModel
    .findByIdAndRemove(req.params.id)
    .then((response:any) => res.json(response))
    .catch((err:any) => handleError(err, res))

 }
