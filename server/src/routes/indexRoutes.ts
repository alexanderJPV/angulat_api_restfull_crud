import { indexController } from './../controllers/indexController';
import { Router} from 'express';
class IndexRputes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/',indexController.list);
        // this.router.get('/:id',indexController.getone);
        // this.router.post('/',indexController.create);
        // this.router.put('/:id',indexController.update);
        // this.router.delete('/',indexController.delete);
    }
}
const indexRoutes=new IndexRputes();
export default indexRoutes.router;