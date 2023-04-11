import express  from "express";
import {
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/Users.js"

const router =express.Router()

router.get('/users', getUser)
router.get('/users:id', getUserById)
router.post('/users', createUser)
router.patch('/users', updateUser)
router.delete('/users', deleteUser)

export default router;