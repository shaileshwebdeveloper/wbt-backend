const {Router} = require('express')
const { getUser, addUser, updateUser, deleteUser } = require('../controllers/users.controller')

const userRouter = Router()

userRouter.get('/', getUser)
userRouter.post('/', addUser)
userRouter.patch('/:id', updateUser)
userRouter.delete('/:id', deleteUser)


module.exports = {userRouter}