import dotenv from 'dotenv';
import Server from './models/server';

//config. dot.env
dotenv.config({ path: "../.env" });



const server = new Server();

server.listen();