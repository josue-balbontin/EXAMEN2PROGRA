import { Estado } from './Estado';

export class Negocio {
    titulo : string;
    descripcion : string;
    Categoria : string[];
    Estado  :  Estado;

    constructor(){
        this.titulo = '';
        this.descripcion = '';
        this.Categoria = [];
        this.Estado = {
            borrado: false,
            validando: false,
            descartada: false
        };
    }


}