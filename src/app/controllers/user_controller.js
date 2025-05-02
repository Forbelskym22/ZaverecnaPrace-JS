'use strict'

export default class UserController {
    
    constructor(UserService) {
        this.service = UserService;
    }

    register = (req, res) => {
        this.service.createUser("Franta","heslo");
    }
}


