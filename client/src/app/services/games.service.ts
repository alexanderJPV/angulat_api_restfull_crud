/* para conectar y hacer request con el backend */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/Game';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GamesService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http:HttpClient) {
  }
  getGames(): Observable<Game>{
      // return this.http.get(`${this.API_URI}/game`);
      return this.http.get(this.API_URI + '/games');
  }
  getGame(id: string) {
    return this.http.get(`${this.API_URI}/games/${id}`);
  }
  // getGame(id: string){
  //   return this.http.get(this.API_URI + '/games' + '/' + id);
  // }
  deleteGame(id: string){
     return this.http.delete(this.API_URI + '/games' + '/' + id);
  }
  saveGame(game: Game){
    return this.http.post(this.API_URI + '/games', game);
  }
  updateGame(id: string|number, updateGame: Game): Observable<Game>{
    // console.log(this.API_URI + '/games' + '/' + id, updateGame);
    return this.http.put(this.API_URI + '/games' + '/' + id, updateGame);
    // return null;
  }
}
