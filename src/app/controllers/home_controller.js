'use strict'
import path from 'path';
import express from 'express';

export default class HomeController {
    home = (req, res) => {
        res.render("index");
    }

}


