const User = require('../models/User')
const bcrypt = require('bcrypt')

const createUserController =  async ({userName, password, role}) => {
    const hashedPassword = await bcrypt.hash(password, 10)
    try {
        const newUser = await User.create({userName, password:hashedPassword, role})
        return newUser
    } catch (error) {
        throw new Error(error.message)
    }
}

//get all users
const getAllUsersController = async () => {
    try {
        const users =  await User.findAll()
        return users

    } catch (error) {
        throw new Error(error.message)
    }

}

const updateUserByIdController  = async (id, userData) => {
    try {
        const user = await User.findByPk(id)
        if(!user) {
            return null
        }
        await user.update(userData)
        return user
    } catch (error) {
        throw  new Error(error.message)

    }

}

const deleteUserByIdController = async(id)=>{
    try {
        const user = await User.findByPk(id)
        if(!user) {
            return null
        }
        await  user.destroy()
        return user

    } catch (error) {
        throw new Error(error.message)
    }
}



module.exports = {
    createUserController,
    getAllUsersController,
    updateUserByIdController,
    deleteUserByIdController
}
