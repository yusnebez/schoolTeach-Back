import classSchema from "../models/classmodel"
import handleError from "../handlerError"
import {Response,Request} from "express"

export const createClass = (req:Request, res:Response) => {
    classSchema
    .create({
        name: req.body.name,
        
    })
    .then((response:any) => res.json(response))
    .catch((err:any) => handleError(err, res))
}

export const getAllClass = (req:Request, res:Response) => {
    classSchema
    .find()
    .then((response: any) => res.json(response))
    .catch((err:any) => handleError(err, res))
}

export const getClassById = (req:Request, res:Response) => {
    classSchema
    .findById(req.params.id)
    .then((response:any) => res.json(response))
    .catch((err:any) => handleError(err, res))

}

export const updateClass = (req:Request, res:Response) => {
     classSchema
    .findByIdAndUpdate(req.params.id, req.body)
    .then((response:any) => res.json(response))
    .catch((err:any) => handleError(err, res))

}

export const deleteClassById = (req:Request, res:Response) => {
    classSchema
    .findByIdAndDelete(req.params.id)
    .then((response:any) => res.json(response))
    .catch((err:any) => handleError(err, res))

}