import { contadorModule } from './contador/contador.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { PruebaComponent } from './heroes/prueba/prueba.component';
import { heroesModule } from './heroes/heroes.module';




@NgModule({
  declarations: [
    AppComponent
     
    
  ],
  imports: [
    BrowserModule,
    heroesModule,
    contadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
