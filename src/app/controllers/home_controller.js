'use strict'
import path from 'path';

export default class HomeController {
    home = (req, res) => {
        res.sendFile(path.join(__dirname, 'www', 'index.html'));
    }

}


