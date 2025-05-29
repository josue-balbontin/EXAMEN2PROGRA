import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgregarComponent } from './agregar/agregar.component';
  
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent , AgregarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   apretar : boolean = false;

  boton(){
    this.apretar = !this.apretar;
  } 

}
