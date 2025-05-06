'use strict';
import { UserRepository } from "../repository/user_repository.js";
import bcrypt from "bcryptjs"

export class UserService {
    
    repo;
    constructor(userRepo) {
        this.repo = userRepo;
    } 

      async createUser(username, password, checkpassword) {
        if (password !== checkpassword) {
            throw new Error("Passwords don't match.");
        }
        else if(!username || !password  || ! checkpassword){
            throw new Error('Missing required parameters: username, password, or display name.');

        }

        const existingUser = await this.repo.findUserByUsername(username);

        if (existingUser) {
        throw new Error('Uživatel s tímto jménem již existuje.');
        }

            let hashedpassword = bcrypt.hashSync(password, 10);
            return  this.repo.createUser(username,hashedpassword)
        }
    

}




