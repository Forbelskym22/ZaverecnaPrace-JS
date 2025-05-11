import { Router } from "express";
import NoteController from "../controllers/note_controller.js";
import { NoteRepository } from "../models/repository/note_repository.js";
import { NoteService } from "../models/service/note_service.js";

import { UserRepository } from "../models/repository/user_repository.js";
import { UserService } from "../models/service/user_service.js";

export default function() {

    const noteRepository = new NoteRepository();
    const noteService = new NoteService(noteRepository);

    const userRepository = new UserRepository();
    const userService = new UserService(userRepository);

    const router = Router();
    const controller = new NoteController(noteService,userService);
    
    router.post('/create', controller.create);
    router.get('/new', controller.getNoteForm)

    router.post('/delete/:id', controller.delete);
    router.post('/toggle-important/:id', controller.updateImportance)
    

    return router;
}