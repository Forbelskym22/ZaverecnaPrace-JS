'use strict'

export default class UserController {
    
    constructor(UserService) {
        this.service = UserService;
    }

    register = async (req, res) => {
        try{
            const { username, password, confirmPassword } = req.body; 
            console.log(username, password, confirmPassword);
            await this.service.createUser(username, password, confirmPassword);
        res.redirect('/user/login');
        }
        catch(error){
            res.render('user/register',  { errorMessage: error });
        }       
    }

    getRegister = (req, res) => {
        res.render("user/register")
    }

    login = async (req,res) => {
        try{
            const { username, password} = req.body; 
            login = await this.service.login(username,password);
            if(login){
                req.session.username = username
            }
            res.redirect('/user/profile');
        }
        catch(error){
            res.render('user/register',  { errorMessage: error });
        }  
    }

    getLogin = (req, res) => {
        res.render("user/login")
    }

    getProfile = (req, res) => {
        res.render("user/profile")
    }
}


