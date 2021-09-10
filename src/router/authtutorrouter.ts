import { Router } from "express";
const authTutor = Router()
import *as authtutorcontroller from "../controllers/authtutorcontroller"

authTutor.post('/signup', authtutorcontroller.signup)
authTutor.post('/login', authtutorcontroller.login)

export default authTutor
