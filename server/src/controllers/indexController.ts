import {Request, Response} from 'express';
class IndexController{

    index(req:Request, res:Response){
    /*res.send('Hello');*/
    res.json({
        text: 'API is /api/games'
    });
   }
}
export const indexController = new IndexController();