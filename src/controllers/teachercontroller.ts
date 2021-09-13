import { TeacherModel } from "../models/teachermodels"
import handleError from "../handlerError"
import {Response,Request} from "express"

export const getAllTeachers = (req:Request, res:Response) => {
    TeacherModel
    .find()
    .then((response: any) => res.json(response))
    .catch((err:any) => handleError(err, res))
}

export const getTeacherById = (req:Request, res:Response) => {
    TeacherModel
    .findById(req.params.id)
    .then((response: any) => res.json(response))
    .catch((err:any) => handleError(err, res))

}

export const updateTeacher = (req:Request, res:Response) => {
    TeacherModel
    .findByIdAndUpdate(req.params.id)
    .then((response:any) => res.json(response))
    .catch((err:any) => handleError(err, res))

}

export const deleteTeacherById = (req:Request, res:Response) => {
    TeacherModel
    .findByIdAndRemove(req.params.id)
    .then((response:any) => res.json(response))
    .catch((err:any) => handleError(err, res))

}

export const updateTeacherStudentid = (req:Request, res:Response) => {
    console.log(req.body.id),
    TeacherModel
    .updateOne({ _id: req.body.id },{
        $set:{
            student: req.body.student,
        }})
    .then((response:any) => res.json(response))
    .catch((err:any) => handleError(err, res))

}
