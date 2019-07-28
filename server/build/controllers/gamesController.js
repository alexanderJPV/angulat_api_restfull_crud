"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM games', (err, rows, fields) => {
                if (err) {
                    res.status(500).json({ msg: 'error', details: err });
                    throw err;
                }
                else {
                    console.log('The solution is: ', rows);
                    res.status(200).json(rows);
                }
            });
        });
    }
    getone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const gamequery = 'SELECT * FROM games WHERE id = ' + id;
            yield database_1.default.query(gamequery, (error, rows) => {
                // console.log("El array es vacio", rows);
                if (Object.keys(rows).length < 1) {
                    res.status(404).json({ text: 'The game does not existe' });
                }
                else {
                    res.status(200).json(rows);
                }
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO games set ?', [req.body]);
            res.status(200).json({
                message: 'Game saved'
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            var gamequery = "UPDATE games SET title=?,description=?,image=?";
            var records = [req.body.title, req.body.description, req.body.image, id];
            yield database_1.default.query(gamequery, records, (error, rows) => {
                if (error) {
                    res.status(500).json({ msg: 'error', details: error });
                    throw error;
                }
                else {
                    res.status(200).json({ text: 'The game was update' });
                }
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const gamequery = 'DELETE FROM games WHERE id = ' + id;
            yield database_1.default.query(gamequery, (error, rows) => {
                if (error) {
                    res.status(500).json({ msg: 'error', details: error });
                    throw error;
                }
                else {
                    res.status(200).json({ text: 'The game was eliminate' });
                }
            });
        });
    }
}
exports.gamesController = new GamesController();
