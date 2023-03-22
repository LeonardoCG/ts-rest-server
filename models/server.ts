import express, { Application } from 'express';
import userRoutes from '../routers/usuario';
import cors from 'cors';

import db from '../db/conncetion';

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
        
        //Metodos inciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    //TODO Conexion DB
    async dbConnection() {

        try {

          await db.authenticate();
          console.log('Database online'); 
        
        } catch (error: any) {
            throw new Error( error );
        }
    }
    

    middlewares() {

        // cors
        this.app.use( cors() );
        // body parseamos 
        this.app.use( express.json() ); 

        // Carpt pub
        this.app.use( express.static( 'public'));

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