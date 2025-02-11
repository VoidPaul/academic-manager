import { Router } from "express"
import { register, login } from "./auth.controller.js"
//import { registerValidator, loginValidator } from "../middleware/user-validator.js"

const router = Router()

router.post("/register")

router.post("/login")

export default router
