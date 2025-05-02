import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
//import routerů
import homeRouter from './routers/home_router.js';
import userRouter from './routers/user_router.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



app.use(express.json());
app.use(express.static(path.join(__dirname, '../www')));

app.use('/api', userRouter());
app.use('/', homeRouter());



export default app;