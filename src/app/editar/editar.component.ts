import { Component, Input, signal, WritableSignal } from '@angular/core';
import { IdeasService } from '../ideas.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  @Input() indice: number = 0;
  @Input() boton : WritableSignal<boolean> = signal(true);

  titulo: string = '';
  descripcion: string = '';
  categoriaTexto: string = '';

  constructor(private ideasService: IdeasService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    const ideas = this.ideasService.obtenerideas();
    if (ideas[this.indice]) {
      const idea = ideas[this.indice];
      this.titulo = idea.titulo;
      this.descripcion = idea.descripcion;
      this.categoriaTexto = idea.Categoria.join(', ');
    }
  }

  guardarCambios(): void {
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
    
    this.ideasService.editarIdea(this.indice, this.titulo, this.descripcion, categorias);
    
    alert('Idea editada exitosamente!');
    this.boton.set(false);
  }

  cancelar(): void {
    this.boton.set(false);
  }
}
