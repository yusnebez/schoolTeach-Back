import { Router } from "express";
const classRouter = Router()
import *as classcontroller from "../controllers/classcontroller"
import authUser from '../utils'

classRouter.post('/', authUser, classcontroller.createClass)
classRouter.get('/', authUser, classcontroller.getAllClass)
classRouter.get('/:id', authUser, classcontroller.getClassById)
classRouter.put('/:id', authUser, classcontroller.updateClass)
classRouter.delete('/:id', authUser, classcontroller.deleteClassById)

export default classRouter