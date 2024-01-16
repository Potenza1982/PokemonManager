import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneracionesComponent } from './componentes/generaciones/generaciones.component';
import { PokemonsComponent } from './componentes/pokemons/pokemons.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneracionesComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
