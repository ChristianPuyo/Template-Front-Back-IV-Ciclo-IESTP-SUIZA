const { Router } = require('express')
const {createUserController,
       getAllUserController,
       updateUserByIdController,
       deleteUserByIdController

} = require('../controllers/userControllers')

const userRouter = Router()

//Create new user 
userRouter.post("/", async(req, res)=>{
    const {userName, password, role} = req.body
    try {
        const newUser = await createUserController({userName, password, role})
        res.status(201).json(newUser)
    } catch (error) {  
        res.status(400).json({error: error.message})
    }
}) 

//Get all students
userRouter.get("/", async(req, res)=>{
    try {
        const students =  await getAllStudentsController()
        res.status(200).json(students)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
//Update student by id
userRouter.put("/:id", async(req, res)=>{
    const {id} = req.params
    const studentData = req.body
    try {
        const  updatedStudent = await updateStudentByIdController(id, studentData)
        if(!updatedStudent){
            return res.status(404).json({error: "Student not found"})
        }
        res.status(200).json(updatedStudent)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
//Delete student by id
userRouter.delete("/:id", async(req, res)=>{
    const {id} = req.params
    try {
        const deletedStudent = await  deleteStudentByIdController(id)
        if(!deletedStudent){
            return res.status(404).json({error: "Student not found"})
        }
        res.status(200).json({message: "Student deleted successfully"})

    } catch (error) {
        res.status(500).json({error: error.message})
    }

})

module.exports={
    userRouter
}