'use strict';
import { supabase } from '../supabase.js';
import { Note } from '../entity/note.js';

export class NoteRepository {
  constructor() {
    this.db = supabase;
  }

  async createNote(userid, name, text, important = false) {
    const { data, error } = await this.db
      .from('notes')
      .insert([
        {
          userid,
          name,
          text,
          important
        }
      ])
      .select(); 

    if (error) {
      throw new Error('Nepodařilo se vytvořit poznámku: ' + error.message);
    }

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
