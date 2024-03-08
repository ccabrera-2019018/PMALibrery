import express from "express";
import { isAdmin, validateJwt } from "../middlewares/validate-jwt.js";
import { login, register, registerAdmin, test } from "./user.controller.js";

const api = express.Router()

//RUTAS PUBLICAS
api.post('/register', register)
api.post('/login', login)

//RUTAS PRIVADAS (ADMIN)
api.get('/test',[validateJwt, isAdmin], test)
api.post('/registerAdmin',[validateJwt, isAdmin], registerAdmin)

export default api