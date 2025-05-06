'use strict'

export default class UserController {
    
    constructor(UserService) {
        this.service = UserService;
    }

    register = (req, res) => {
        const { username, password, confirmPassword } = req.body; 
        this.service.create(username, password, confirmPassword);
        
    }

    getRegister = (req, res) => {
        res.render("user/register")
    }

    login = (req,res) => {

    }

    getLogin = (req, res) => {
        res.render("user/login")
    }
}


