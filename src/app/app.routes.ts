import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
     { path: '', redirectTo: '/home', pathMatch: 'full' },
     { path: 'admin', component: HomeComponent },


];
