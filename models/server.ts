import express, { Application } from 'express';

class Server {
    // definir el tipo
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server in port ' + this.port );
        })
    }
}

export default Server;