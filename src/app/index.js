import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import homeRouter from './routers/home_router.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

  

// Sending json in requests
app.use(express.json());
app.use(express.static(path.join(__dirname, '../www')));


app.use('/', homeRouter());



export default app;