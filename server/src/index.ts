import morgan from 'morgan';
import cors from 'cors';
import indexRoutes  from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';
import express, { Application } from 'express';
class Server{
    public app: Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
     config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));//para ver las peticiones
        this.app.use(cors());  //angular pide los datos
        this.app.use(express.json());//recibe y envia datos en formato json
        this.app.use(express.urlencoded({extended: false}));
    }
    routes(): void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/game',gamesRoutes);
    }
    start(): void{
        this.app.listen(this.app.get('port'), () =>{
            console.log('Serve on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
