 
import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from 'src/app/models/Game';

//ActivatedRoute permite saber que estoy recibiendo como parametro
import { GamesService } from 'src/app/services/games.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})

export class GameFormComponent implements OnInit {
  // para agregar una clase y propiedad al componente
  @HostBinding('class') clases = 'row';
  game: any = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  edit: boolean = false;
  constructor(private gameService: GamesService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.gameService.getGame(params.id)
        .subscribe(
          res => {
            this.game = res[0];
            console.log(this.game);
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  /* evento click del componente del form-control frontend */
  saveNewGame() {
    delete this.game.created_at;
    delete this.game.id;
    this.gameService.saveGame(this.game)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/games']);
        },
        err => console.error(err)
      )
  }
  updateGame() {
    delete this.game.created_at;
    this.gameService.updateGame(this.game.id, this.game)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/games']);
        },
        err => console.error(err)
     )
  }
}
