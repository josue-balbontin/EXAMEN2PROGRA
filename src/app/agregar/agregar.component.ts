import { Component } from '@angular/core';
import { IdeasService } from '../ideas.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  imports: [FormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {
  titulo: string = '';
  descripcion: string = '';
  categoriaTexto: string = '';

  constructor(private ideasService: IdeasService) { }

  agregarIdea(): void {
    var categorias : string[] = [];  
    var palabra : string = '';   
    for(let i = 0; i < this.categoriaTexto.length; i++) {
      if(this.categoriaTexto[i] == ',') {
        categorias.push(palabra.trim());
        palabra = '';
      } else {
        palabra += this.categoriaTexto[i];
      }
    }
    categorias.push(palabra.trim());

    this.ideasService.agregarIdea(this.titulo, this.descripcion, categorias);

    this.limpiarFormulario();

    alert('Idea agregada exitosamente!');
  }

  limpiarFormulario(): void {
    this.titulo = '';
    this.descripcion = '';
    this.categoriaTexto = '';
  }
}
