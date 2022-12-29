import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: '', component: PokemonListComponent }, 
  { path: 'view/:name', component: PokemonDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
