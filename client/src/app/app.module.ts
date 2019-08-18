/* para importar todos los modulos y librerias que trabajan en los componentes */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from  '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NavigationComponent } from './components/navigation/navigation.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { AppComponent } from './app.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GamesService } from './services/games.service';

@NgModule({
  /* declaracion de componentes */
  declarations: [
    AppComponent,
    NavigationComponent,
    GameFormComponent,
    GameListComponent
  ],
  /* importacion de modulos */
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  /* proveedores de servicios */
  providers: [
    GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
