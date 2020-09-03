import { CapturePokemonComponent } from './capture-pokemon/capture-pokemon.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'capture-pokemon', component: CapturePokemonComponent }
]