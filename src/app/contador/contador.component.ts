import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `

        <h1>{{titulo}}</h1>
        <h3>La base es:<strong> {{+base}}</strong></h3>

        <button (click)=" acumular2(base) ">{{"+"+base}}</button>

        <span>{{numero}}</span>

        <button (click)=" acumular2(-base) ">{{-base}}</button>
        
`
})


export class ContadorCommponent{
    titulo = 'Ejercicios';
    numero:number = 10;
  
    //sumar(){
     // this.contador=this.contador+1;
    //}
  
   // restar(){
     // this.contador-=1
    //}
  
  
    //acumular(valor:number){
      //this.numero +=valor;
   // }
  
   base : number = +5;
  
   acumular2(valor:number){
    this.numero+=valor
   }

   
}