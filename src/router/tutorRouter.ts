import { Router } from "express"
const tutorRouter = Router()
import *as tutorcontroller from '../controllers/tutorcontroller'
import *as logintutorcontroller from '../controllers/authtutorcontroller'
import authUser from '../utils'


tutorRouter.get('/alltutor', authUser, tutorcontroller.getAllTutor)
tutorRouter.get('/buscar', tutorcontroller.getbyEmail)
tutorRouter.get('/:id', authUser, tutorcontroller.getTutorById)
tutorRouter.put('/:id', authUser, tutorcontroller.updateTutor)
tutorRouter.delete('/:id', authUser, tutorcontroller.deleteTutorById)
tutorRouter.put('/:id/subjectid', authUser, tutorcontroller.addSubject)

export default tutorRouter
