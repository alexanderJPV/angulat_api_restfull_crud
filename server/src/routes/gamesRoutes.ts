import { gamesController } from './../controllers/gamesController';
import { Router} from 'express';
class GamesRoutes{
    public router:Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/',gamesController.list);
        this.router.get('/:id',gamesController.getone);
        this.router.post('/',gamesController.create);
        this.router.put('/:id',gamesController.update);
        this.router.delete('/:id',gamesController.delete);
    }
}
const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;