import { Component, OnInit, HostBinding } from '@angular/core';
import { GamesService } from '../../services/games.service';

import { Game } from './../../models/Game';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  @HostBinding('class') classes ='row';
  games: any =[];

  constructor(private gameservice: GamesService) {
  }
  ngOnInit() {
    this.getGames();
  }
  getGames(){
    this.gameservice.getGames().subscribe(
      res => {
        this.games = res;
      },
      //  res => console.log(res),
      err => console.error(err)
    );
  }
  deleteGame(id: string){
    // console.log(id);
    this.gameservice.deleteGame(id).subscribe(
      res => {
             console.log(res);
             this.getGames();
      },
      err => console.error(err)
    );
  }
  // editGame(id: string){
  //   console.log('====>' + id);
  // }
}