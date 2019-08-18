"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    list(req, res) {
        /*res.send('Hello');*/
        res.json({
            text: 'API is /api/games'
        });
    }
}
exports.indexController = new IndexController();
