'use strict';
import { supabase } from '../supabase.js';
import { Note } from '../entity/note.js';

export class NoteRepository {
  constructor() {
    this.db = supabase;
  }

  async createNote(userid, name, text, important = false) {
    const negr = { userid, name, text, important };
    console.log("Pokus o insert:", negr);
    const { data, error } = await this.db
      .from('notes')
      .insert([
        {
          userid: 11,
          name: "s",
          text: "s",
          important: false
        }
      ])
      .select(); 

    if (error) {
        
        console.error("Supabase insert error:", error);  // log full error object
        throw new Error('Nepodařilo se vytvořit poznámku: ' + (error.message || JSON.stringify(error)));
          
    }
const payload = { userid, name, text, important };
console.log("Pokus o insert:", payload);
    const note = data[0];
    return new Note(
      note.id,
      note.userid,
      note.name,
      note.text,
      note.important,
      note.created_at 
    );
  }
}
