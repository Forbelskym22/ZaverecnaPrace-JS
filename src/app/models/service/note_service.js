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
    
    async getnotes(userid) {
        let notes = await this.repo.getNotesByUserId(userid);
    
        const formattedNotes = notes.map(note => ({
            name: note.name,
            text: note.text,
            important: note.important,
            time: new Date(note.time).toLocaleString('cs-CZ', {
                dateStyle: 'medium',
                timeStyle: 'short',
                timeZone: 'Europe/Prague'
            })
        }));
    
        
        formattedNotes.sort((a, b) => b.important - a.important);
    
        return formattedNotes;
    }
    
    

}




