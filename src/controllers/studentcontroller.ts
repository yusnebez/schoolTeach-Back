// import studentModel from "../models/studentmodel"
// import { handleError } from "../utils"
import {Response,RequestHandler} from "express"

export const createStudent:RequestHandler = (req, res) => {
    
// //     studentModel
// //     .create({
// //         name: req.body.name,
// //         email: req.body.email,
// //         lastname: req.body.lastname,

// //     })
// //     .then(response => res.json(response))
// /    .catch((err) => handleError(err, res))
 }


export const getbyEmail:RequestHandler = (req, res) => {
//     studentModel
//     .findOne(req.query)
//     .then(response => res.json(response))
//     .catch((err) => handleError(err, res))
   
res.json('greeting ok') 
 }

export const getAllStudents:RequestHandler = (req, res) => {
//     studentModel
//     .find()
//     .then(response => res.json(response))
//     .catch((err) => handleError(err, res))
}

export const getStudentById:RequestHandler = (req, res) => {
//     studentModel
//     console.log()
//     .findById(req.body.email)
//     .then(response => res.json(response))
//     .catch((err) => handleError(err, res))

 }

export const addSubject:RequestHandler = (req, res) => {
//     studentModel
//     .findById(req.params.id)
//     .then(response => {
//         response.subjects.push({
//             info: req.params.subjectId
//         })
//         response.save()

//     })
//     .catch((err) => handleError(err, res))

 }

export const updateStudent:RequestHandler = (req, res) => {
//     studentModel
//     .findByIdAndUpdate(req.params.id)
//     .then(response => res.json(response))
//     .catch((err) => handleError(err, res))

}

export const deleteStudentById:RequestHandler = (req, res) => {
//     studentModel
//     .findByIdAndRemove(req.params.id)
//     .then(response => res.json(response))
//     .catch((err) => handleError(err, res))

 }
