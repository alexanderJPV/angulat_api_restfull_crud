import {Request, Response} from 'express';
import pool from '../database';
class GamesController{
    public async list(req:Request, res:Response): Promise<void>{
        await pool.query('SELECT * FROM games', (err: any, rows: any, fields: any) => {
            if (err) {
                res.status(500).json({ msg: 'error', details: err });
                throw err;
            }else{
                console.log('The solution is: ', rows);
                res.status(200).json(rows);
            }
        });
    }

    public async getone(req: Request, res:Response): Promise<void>{
        const id = req.params.id;
        const gamequery = 'SELECT * FROM games WHERE id = ' + id;
        await pool.query(gamequery, (error: any, rows: any) => {
            // console.log("El array es vacio", rows);
            if (Object.keys(rows).length < 1) {
                res.status(404).json({text: 'The game does not existe'});
            } else {
                res.status(200).json(rows);
            }
        });
    }

    public async create(req:Request, res:Response): Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO games set ?',[req.body]);
        res.status(200).json({
            message: 'Game saved'
        });
    }
    public async update(req: Request, res: Response):Promise<void>{
        const {id} = req.params;
        var gamequery="UPDATE games SET title=?,description=?,image=? where id=?"
        var records = [req.body.title, req.body.description, req.body.image, id];
        await pool.query(gamequery,records,(error:any, rows:any) =>{
            if (error) {
                res.status(500).json({ msg: 'error', details: error });
                throw error;
            }else{
                res.status(200).json({text:'The game was update'});
            }
        });
    }
    public async delete(req:Request, res: Response):Promise<void>{
        const {id} = req.params;
        const gamequery = 'DELETE FROM games WHERE id = '+ id;
        await pool.query(gamequery, (error:any, rows:any) =>{
            if (error) {
                res.status(500).json({ msg: 'error', details: error });
                throw error;
            }else{
                res.status(200).json({text:'The game was eliminate'});
            }
        });
    }
}
export const gamesController = new GamesController();