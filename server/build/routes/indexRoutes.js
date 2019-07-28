"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const indexController_1 = require("./../controllers/indexController");
const express_1 = require("express");
class IndexRputes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.list);
        // this.router.get('/:id',indexController.getone);
        // this.router.post('/',indexController.create);
        // this.router.put('/:id',indexController.update);
        // this.router.delete('/',indexController.delete);
    }
}
const indexRoutes = new IndexRputes();
exports.default = indexRoutes.router;
