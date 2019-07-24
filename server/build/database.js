"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = __importDefault(require("./keys"));
var mysql = require('mysql');
var pool = mysql.createConnection(keys_1.default.database);
pool.connect(() => {
    console.log('DB is connect');
});
exports.default = pool;
