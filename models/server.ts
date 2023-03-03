import express, { Application } from 'express';
import userRoutes from '../routers/usuario';

class Server {
    // definir el tipo
    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        //definir rutas
        this.routes();
    }

    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes )
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server in port ' + this.port );
        })
    }
}

export default Server;