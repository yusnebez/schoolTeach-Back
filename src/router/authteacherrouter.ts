import { Router } from "express";
const authTeacher = Router()
import *as authteachercontroller from "../controllers/authteachercontroller"


authTeacher.post('/signup', authteachercontroller.signup)
authTeacher.post('/login', authteachercontroller.login)

export default authTeacher
