import { Router } from "express";
const studentRouter = Router()
import *as studentcontroller from "../controllers/studentcontroller"
import authUser from '../utils';

   studentRouter.post('/', authUser, studentcontroller.createStudent)
   studentRouter.get('/', authUser, studentcontroller.getAllStudents)
   studentRouter.get('/buscar', studentcontroller.getbyEmail)
   studentRouter.get('/:id', authUser, studentcontroller.getStudentById)
   studentRouter.put('/:id', authUser, studentcontroller.updateStudent)
   studentRouter.delete('/:id', authUser, studentcontroller.deleteStudentById)
   studentRouter.put('/:id/subjectid', authUser, studentcontroller.addSubject)

export default studentRouter;