import { Router } from "express";
import NoteController from "../controllers/note_controller.js";
import { NoteRepository } from "../models/repository/note_repository.js";
import { NoteService } from "../models/service/note_service.js";


export default function() {

    const noteRepository = new NoteRepository();
    const noteService = new NoteService(noteRepository);

    const router = Router();
    const controller = new NoteController(noteService);
    
    router.post('/new', controller.newNote);
    router.get('/new', controller.getNoteForm)

    

    return router;
}