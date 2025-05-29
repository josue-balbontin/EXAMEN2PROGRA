import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { Negocio } from '../negocio';
import { IdeasService } from '../ideas.service';
import { EditarComponent } from '../editar/editar.component';


@Component({
  selector: 'app-home',
  imports: [EditarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ideas: Negocio[] ;
  editar: WritableSignal<boolean> = signal(false);
  indice : number = 0;

  constructor(private almacenamiento: IdeasService){
    this.ideas = almacenamiento.obtenerideas();
  }

  eliminarIdea(indice : number): void {
    this.almacenamiento.eliminarIdea(indice);
  }

  editarf(indice : number): void {
    this.indice = indice;
    this.editar.set(!this.editar());
  }

}
