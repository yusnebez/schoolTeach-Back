import { Router } from "express";
const teacherRouter = Router()
import *as teachercontroller from "../controllers/teachercontroller"
import authUser  from '../utils'

teacherRouter.get('/:id', authUser, teachercontroller.getTeacherById)
teacherRouter.put('/:id', authUser, teachercontroller.updateTeacher)
teacherRouter.delete('/:id', authUser, teachercontroller.deleteTeacherById)
teacherRouter.post('/updateid', teachercontroller.updateTeacherStudentid)

export default teacherRouter;
 