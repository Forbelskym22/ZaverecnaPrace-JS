'use strict'

export default class UserController {
    
    constructor(UserService, NoteService) {
        this.noteService = NoteService;
        this.userService = UserService
    }

    register = async (req, res) => {
        try{
            const { username, password, confirmPassword } = req.body; 
            console.log(username, password, confirmPassword);
            await this.userService.createUser(username, password, confirmPassword);
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
            let login = await this.userService.login(username,password);
            if(login){
                req.session.username = username
            }
            res.redirect('profile')
        }
        catch(error){
            res.render('user/register',  { errorMessage: error });
        }  
    }

    getLogin = (req, res) => {
        res.render("user/login")
    }

    getProfile = async (req, res) => {
        try{
            const username = req.session.username;
            
            const user = await this.userService.findUser(username);
            let notes =  await this.noteService.getnotes(user.id);
            console.log(notes);
            res.render("user/profile", { notes: notes || [] });
        }
        catch(error){

        }
    }
    logout = (req,res) => {
        try{
            req.session.username= null;
            res.redirect("login");
        }
        catch(error){

        }
    }
}


