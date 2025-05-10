'use strict';
import { NoteRepository } from "../repository/note_repository.js";
import bcrypt from "bcryptjs"

export class NoteService {
    
    repo;
    constructor(noteRepo) {
        this.repo = noteRepo;
    } 

    async createNote(userid,name,text,important){
        return await this.repo.createNote(userid, name, text, important)
    }
          

}




