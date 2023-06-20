/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b:number): number{
    return a+b;
}


const sumarFlecha = (b:number,c:number):number=>{
    return b+c;
}


function multiplicar(numero:number, otronumero?:number,base:number = 2):number{
    return numero * base;

}


const resultado = sumar(10, 20);
 
const resultado2 = sumarFlecha (10, 20);

const resultado3 = multiplicar(5,0,10);

//console.log(resultado3);
//---------------------------------------

interface PersonajeL0R{
    nombre: string;
    pv: number;
    mostrarHo: () => void;
}

function curar(personaje:PersonajeL0R, curarX:number):void{

    personaje.pv += curarX;
    
    //console.log(personaje);

}

const nuevoPersonaje: PersonajeL0R={
    nombre: 'Strider',
    pv: 50,
    mostrarHo(){
        console.log('Puntos de vida', this.pv);
    }
}

curar(nuevoPersonaje,20);
nuevoPersonaje.mostrarHo();


