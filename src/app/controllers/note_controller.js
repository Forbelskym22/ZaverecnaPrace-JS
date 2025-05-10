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
    
}


