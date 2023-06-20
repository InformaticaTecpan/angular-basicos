import { Component } from "@angular/core";

@Component({

    selector: 'app-Heroe',
    templateUrl: 'heroe.component.html'


})

export class HeroeComponent{

    nombre: string = 'Ironman';
    edad: number = 15;

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';

    }

    cambiar():void{
        this.edad = 27;
    }
}