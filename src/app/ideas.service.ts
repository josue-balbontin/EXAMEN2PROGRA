import { Injectable } from '@angular/core';
import { Negocio } from './negocio';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {
 private  ideas: Negocio[] = [
    {
      titulo: 'Idea 1',
      descripcion: 'Descripcion de la idea 1',
      Categoria: ['Categoria 1', 'Categoria 2'],
      Estado: {
        borrado: false,
        validando: true,
        descartada: false
      }
    },
    {
      titulo: 'Idea 2',
      descripcion: 'Descripcion de la idea 2',
      Categoria: ['Categoria 3'],
      Estado: {
        borrado: false,
        validando: false,
        descartada: true
      }
    }
  ];
  constructor() { }

  obtenerideas(): Negocio[] {
    return this.ideas;
  }
  agregarIdea(titulo: string, descripcion: string, categoria: string[]): void {
    const idea: Negocio = {
      titulo,
      descripcion,
      Categoria: categoria,
      Estado: {
        borrado: false,
        validando: true,
        descartada: false
      }
    };
    this.ideas.push(idea);
  }

  editarIdea(index: number, titulo: string, descripcion: string, categoria: string[]): void {
    this.ideas[index].titulo = titulo;
    this.ideas[index].descripcion = descripcion;
    this.ideas[index].Categoria = categoria;
  }
  eliminarIdea(index: number): void {
    this.ideas[index].Estado.borrado = true;
  }
  

}
