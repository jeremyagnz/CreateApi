import express  from 'express';
import cors from 'cors';
import mainRoutes from './routes/mainroutes.routes'
import morgan  from 'morgan';

class Server {

    private app:express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.middlewares();
        this.routes();
    };

    private config():void{
        this.app.set('port', process.env.PORT  ||  3000);
        this.app.use(cors());
        
    };

    private middlewares():void{
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    };

    private routes():void{
        this.app.use(mainRoutes)
    };

    public start():void {
        this.app.listen(this.app.get('port'))
    };
}

const server = new Server();
server.start();