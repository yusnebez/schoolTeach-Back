import {Router} from 'express'
import studentRouter from './studentRouter'
import teacherRouter from './teacherRouter'
import subjectRouter from './subjectRouter'
import tutorRouter from './tutorRouter'
// import contentRouter from './content'
import classRouter from './classRouter'
import authteacherrouter from './authteacherrouter'
import authtutorrouter from './authtutorrouter'
import authstudentrouter from '../router/authstudentrouter'

const router = Router()

router.use('/students',authstudentrouter)
router.use('/tutores',authtutorrouter)
router.use('/', authteacherrouter)
router.use('/class', classRouter)
router.use('/teacher',teacherRouter)
router.use('/student',studentRouter)
router.use('/subject',subjectRouter)
router.use('/tutor',tutorRouter)
// router.use('/content',contentRouter)

export default router