import { Router } from "express";
const authRouter = Router()
import *as authcontroller from "../controllers/authcontroller"

authRouter.post('/signup', authcontroller.signup)
authRouter.post('/login', authcontroller.login)

export default authRouter
