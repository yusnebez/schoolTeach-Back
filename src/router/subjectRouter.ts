import { Router } from "express";
const subjectRouter = Router()
import *as subjectcontroller from "../controllers/subjectcontroller"
import authUser from '../utils'

subjectRouter.post('/', authUser, subjectcontroller.createSubject)
subjectRouter.get('/', authUser, subjectcontroller.getAllSubjects)
subjectRouter.get('/:id', authUser, subjectcontroller.getSubjectById)
subjectRouter.put('/:id', authUser, subjectcontroller.updateSubject)
subjectRouter.delete('/:id', authUser, subjectcontroller.deleteSubjectById)

export default subjectRouter;
