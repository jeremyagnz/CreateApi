import { Request, Response,Router } from "express";

class MainRoutes{

    public router:Router;
    constructor(){
       this.router  = Router();
       this.routes();
    };

    public routes():void {
        this.router.get('/api', (req: Request, res: Response) => {
            res.send(JSON.stringify({message: "hola"}));
        });

        this.router.post('/api', (req: Request, res: Response) => {
            res.send(req.body);
        });
        
    }
}

const mainRoutes = new MainRoutes();
mainRoutes.routes();


export default mainRoutes.router;