import {Router} from 'express'
import studentRouter from './studentRouter'
import teacherRouter from './teacherRouter'
import subjectRouter from './subjectRouter'
import tutorRouter from './tutorRouter'
// import contentRouter from './content'
import classRouter from './classRouter'
import authRouter from './authrouter'

const router = Router()

router.use('/', authRouter)
router.use('/class', classRouter)
router.use('/teacher',teacherRouter)
router.use('/student',studentRouter)
router.use('/subject',subjectRouter)
router.use('/tutor',tutorRouter)
// router.use('/content',contentRouter)

export default router