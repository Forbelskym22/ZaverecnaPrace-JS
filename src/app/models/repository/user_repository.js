'use strict';
import { User } from "../entity/user.js";
import { supabase } from '../supabase.js';


export class UserRepository {
  constructor() {
    this.db = supabase; 
  }
      
    async createUser(username, password) {
      console.log("DOŠLO TO AŽ SEM!")
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

}




