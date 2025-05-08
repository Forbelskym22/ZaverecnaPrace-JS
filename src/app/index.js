import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
//import routerů
import homeRouter from './routers/home_router.js';
import userRouter from './routers/user_router.js';
import dotenv from 'dotenv';
import session from 'express-session';
dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middle ware
app.use(express.urlencoded({ extended: false }));                     


app.use(express.json());
app.use(express.static(path.join(__dirname, '../www')));

app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
}))

app.use((req, res, next) => {
    res.locals.username = req.session.username || null;
    next();
});


app.use('/user', userRouter());
app.use('/', homeRouter());



export default app;