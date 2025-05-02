'use strict';
import { UserRepository } from "../repository/user_repository.js";

export class UserService {
    
    constructor(userRepo) {
        this.repo = userRepo;
    } 

      async createUser(username, password) {
            return  this.repo.createUser(username,password)
        }
    

}




