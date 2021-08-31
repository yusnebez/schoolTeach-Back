import teacherSchema from "../models/teachermodels"
import handleError from "../handlerError"
import {Response,Request} from "express"

export const getAllTeachers = (req:Request, res:Response) => {
    teacherSchema
    .find()
    .then((response: any) => res.json(response))
    .catch((err:any) => handleError(err, res))
}

export const getTeacherById = (req:Request, res:Response) => {
    teacherSchema
    .findById(req.params.id)
    .then((response: any) => res.json(response))
    .catch((err:any) => handleError(err, res))

}

export const updateTeacher = (req:Request, res:Response) => {
    teacherSchema
    .findByIdAndUpdate(req.params.id)
    .then((response:any) => res.json(response))
    .catch((err:any) => handleError(err, res))

}

export const deleteTeacherById = (req:Request, res:Response) => {
    teacherSchema
    .findByIdAndRemove(req.params.id)
    .then((response:any) => res.json(response))
    .catch((err:any) => handleError(err, res))

}