import http from 'http';
import dotenv from 'dotenv';
import app from './app/index.js';

dotenv.config();


const { PORT } = process.env;
const server = http.createServer(app);

server.listen(PORT, 'localhost', () => {
    console.log(`Server běží na http://localhost:${PORT}`);
});