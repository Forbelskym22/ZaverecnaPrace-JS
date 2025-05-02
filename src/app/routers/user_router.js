import { Router } from "express";
import UserController from "../controllers/user_controller.js";



export default function() {
    const router = Router();
    const controller = new UserController();
    
    router.get('/api/register', controller.register);
    
    return router;
}