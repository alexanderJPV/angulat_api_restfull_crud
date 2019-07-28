"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    list(req, res) {
        /*res.send('Hello');*/
        res.json({
            text: 'API is /api/games'
        });
    }
    getone(req, res) {
    }
    create() {
    }
    update() {
    }
    delete() {
    }
}
exports.indexController = new IndexController();
