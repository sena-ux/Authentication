import express  from "express";
import {
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/Users.js"
import { verifyUser, adminOnly, checkLogin } from "../middleware/AuthUser.js";


const router = express.Router()

router.get('/users', checkLogin, verifyUser, adminOnly, getUser)
router.get('/users/:id', checkLogin, verifyUser, adminOnly, getUserById)
router.post('/users', checkLogin, verifyUser, adminOnly, createUser)
router.patch('/users/:id', checkLogin, verifyUser, adminOnly, updateUser)
router.delete('/users/:id', checkLogin, verifyUser, adminOnly, deleteUser)

export default router;