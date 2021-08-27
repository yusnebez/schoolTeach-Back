import { Router } from "express";
const studentRouter = Router()
import *as studentcontroller from "../controllers/studentcontroller"
// require('../controllers/studentcontroller')
// import { authUser } from '../utils';


// studentRouter.post('/', authUser, createStudent)
// studentRouter.post('/', authUser, createStudent)
// studentRouter.get('/', authUser, getAllStudents)
   studentRouter.get('/buscar', studentcontroller.getbyEmail)
// studentRouter.get('/:id', authUser, getStudentById)
// studentRouter.put('/:id', authUser, updateStudent)
// studentRouter.delete('/:id', authUser, deleteStudentById)
// studentRouter.put('/:id/subjectid', authUser, addSubject)

export default studentRouter;