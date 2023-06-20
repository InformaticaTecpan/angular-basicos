/*
    ===== Código de TypeScript =====
*/

let habilidades:string[] = ['Bash','counter','healing'];

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    PuebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'strider',
    hp: 100,
    habilidades : ['Bash','Counter','Healing']
}

personaje.PuebloNatal = 'Pueblo paleta';

console.table(personaje);