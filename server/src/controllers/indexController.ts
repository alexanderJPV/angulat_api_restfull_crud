import {Request, Response} from 'express';
class IndexController{

    public list(req:Request, res:Response){
    /*res.send('Hello');*/
        res.json({
            text: 'API is /api/games'
        });
    }
    public getone(req:Request, res:Response){
    }
    public create(){
    }
    public update(){
    }
    public delete(){
    }
}
export const indexController = new IndexController();