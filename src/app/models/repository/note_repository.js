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
        
        console.error("Supabase insert error:", error);  // log full error object
        throw new Error('Nepodařilo se vytvořit poznámku: ' + (error.message || JSON.stringify(error)));
          
    }
    const payload = { userid, name, text, important };
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

    async getNotesByUserId(userid) {
        const { data, error } = await this.db
        .from('notes')
        .select('*')
        .eq('userid', userid)
        .order('created_at', { ascending: false }); // volitelné: seřazení podle data
    
        if (error) {
        console.error("Chyba při načítání poznámek:", error);
        throw new Error('Nepodařilo se načíst poznámky: ' + (error.message || JSON.stringify(error)));
        }
    
        return data.map(note => new Note(
        note.id,
        note.userid,
        note.name,
        note.text,
        note.important,
        note.created_at
        ));
    }


    async removeNote(id) {
        const { data, error } = await this.db
        .from('notes')
        .delete()
        .eq('id', id);

        if (error) {
        console.error("Chyba při mazání poznámky:", error);
        throw new Error('Nepodařilo se smazat poznámku: ' + (error.message || JSON.stringify(error)));
        }

        

        return data;
    }

    async toggleImportant(id) {
    const { data: existingNote, error: fetchError } = await this.db
      .from('notes')
      .select('important')
      .eq('id', id)
      .single();

    if (fetchError) {
      console.error("Chyba při načítání poznámky:", fetchError);
      throw new Error('Nepodařilo se načíst poznámku.');
    }

    const newValue = !existingNote.important;

    const { data, error } = await this.db
      .from('notes')
      .update({ important: newValue })
      .eq('id', id)
      .select();

    if (error) {
      console.error("Chyba při aktualizaci poznámky:", error);
      throw new Error('Nepodařilo se aktualizovat poznámku.');
    }

    return data[0];
  }

  async getNoteIdsByUserId(userid) {
  const { data, error } = await this.db
    .from('notes')
    .select('id')
    .eq('userid', userid);

  if (error) {
    console.error("Chyba při načítání ID poznámek:", error);
    throw new Error('Nepodařilo se načíst ID poznámek.');
  }
  return data.map(row => row.id);
}
}
