import { Router } from "express";
import UserController from "../controllers/user_controller.js";
import { UserRepository } from "../models/repository/user_repository.js";
import { UserService } from "../models/service/user_service.js";

import { NoteRepository } from "../models/repository/note_repository.js";
import { NoteService } from "../models/service/note_service.js";

export default function() {

    const userRepository = new UserRepository();
    const userService = new UserService(userRepository);

    const noteRepository = new NoteRepository();
    const noteService = new NoteService(noteRepository);

    const router = Router();
    const controller = new UserController(userService, noteService);
    
    router.post('/register', controller.register);
    router.get('/register', controller.getRegister);

    router.post('/login', controller.login);
    router.get('/login', controller.getLogin);

    //router.post('/profile', controller.profile);
    router.get('/profile', controller.getProfile);
    router.post('/logout', controller.logout);

    return router;
}