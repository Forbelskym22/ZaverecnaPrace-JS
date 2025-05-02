import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
//import routerů
import homeRouter from './routers/home_router.js';
import userRouter from './routers/user_router.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

  

app.use(express.json());
app.use(express.static(path.join(__dirname, '../www')));


app.use('/', homeRouter());
app.use('/api', userRouter());



export default app;