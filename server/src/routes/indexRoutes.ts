import { indexController } from './../controllers/indexController';
import { Router} from 'express';
class IndexRputes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/',indexController.index);
    }
}
const indexRoutes=new IndexRputes();
export default indexRoutes.router;