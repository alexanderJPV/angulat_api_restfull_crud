import {Request, Response} from 'express';
class IndexController{

    public list(req:Request, res:Response){
    /*res.send('Hello');*/
        res.json({
            text: 'API is /api/games'
        });
    }
}
export const indexController = new IndexController();