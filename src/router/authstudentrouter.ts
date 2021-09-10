import { Router } from "express";
const authStudent = Router()
import *as authstudentcontroller from "../controllers/authstudentcontroller"

authStudent.post('/signup', authstudentcontroller.signup)
authStudent.post('/login', authstudentcontroller.login)

export default authStudent
