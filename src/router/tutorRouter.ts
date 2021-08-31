import { Router } from "express"
const tutorRouter = Router()
import *as tutorcontroller from '../controllers/tutorcontroller'
import authUser from '../utils'

tutorRouter.post('/', authUser, tutorcontroller.createTutor)
tutorRouter.get('/', authUser, tutorcontroller.getAllTutor)
tutorRouter.get('/buscar', tutorcontroller.getbyEmail)
tutorRouter.get('/:id', authUser, tutorcontroller.getTutorById)
tutorRouter.put('/:id', authUser, tutorcontroller.updateTutor)
tutorRouter.delete('/:id', authUser, tutorcontroller.deleteTutorById)
tutorRouter.put('/:id/subjectid', authUser, tutorcontroller.addSubject)

export default tutorRouter
