const {Router} = require('express')
const {studentRouter} = require('../routes/studentRoutes')
const {userRouter} = require('../routes/userRoutes')

const router  = Router()

router.use('/student',studentRouter)
router.use('/user',userRouter)
//router.use('/course', courseRoter)
//router.use('/teacher', teacherRouter)
//router.use('/exam', examRouter)


module.exports = router;
