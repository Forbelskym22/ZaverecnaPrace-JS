'use strict'

export default class UserController {
    
    constructor(NoteService,UserService) {
        this.noteService = NoteService;
        this.userService = UserService
    }

    getNoteForm = (req, res) => {
        res.render("notes/note")
    }
    create = async (req, res) => {
        try {
            const { name, text, important } = req.body;
            const username = req.session.username;
            
            const user = await this.userService.findUser(username);
    
            await this.noteService.createNote(user.id,name,text,important === "true");
    
            res.redirect('/user/profile');
        } catch (error) {
            console.error(error);
            res.render('notes/note', { errorMessage: error.message });
        }
    }
    
    delete = async (req,res) =>{
        const { id } = req.params;
        try{
            await this.noteService.removeNote(id);
            res.redirect('/user/profile');
        }
        catch(error){
            res.redirect('/user/profile', {errorMessage: error.message});
        }
    }

    updateImportance = async (req,res) => {
        const { id } = req.params;
        try{
            await this.noteService.updateImportance(id);
            res.redirect('/user/profile');

        }
        catch(error){
            res.redirect('/user/profile', {errorMessage: error.message});
        }
    }

}


