'use strict';
import { User } from "../entity/user.js";
import { supabase } from '../supabase.js';

export class UserRepository {
  constructor() {
    this.db = supabase; 
  }
      
    async createUser(username, password) {
        const { data, error } = await this.db
          .from('users') 
          .insert([
            { username: username, password: password }
          ])
          .select();
    
        if (error) {
          throw new Error('Error creating user: ' + error.message);
        }
    
        const user = data[0];
        return new User(user.id, user.username, user.password);
      }

      async findUserByUsername(username) {
        const { data, error } = await this.db
          .from('users')
          .select('*')
          .eq('username', username)
          .single(); 
      
        if (error) {
          return false
        }
      
        return data;
      }

      async deleteUserById(id) {
        const { error } = await this.db
          .from('users')
          .delete()
          .eq('id', id);

        if (error) {
          throw new Error('Chyba při mazání uživatele: ' + error.message);
        }
      }
}




