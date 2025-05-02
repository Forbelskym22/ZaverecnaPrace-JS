import { Router } from "express";
import HomeController from "../controllers/home_controller.js";



export default function() {
    const router = Router();
    const controller = new HomeController();
    
    router.get('/', controller.home);
    
    return router;
}