import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  page = 1;
  totalPokemons: number = 0;

  constructor(
    private pokeapiService: PokeapiService
  ) { }

  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon(lastId: number = 0){
    this.pokeapiService.getPokemon(lastId)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;
        response.results.forEach((pkmn: any) => {
          this.pokeapiService.getPokemonData(pkmn.name)
            .subscribe((pokemonDataResponse: any) => {
              this.pokemons.push(pokemonDataResponse)
            })
        });
      })
      console.log(this.pokemons)
  }

  sort_pokedex(): void {
    this.pokemons = this.pokemons.sort((a, b) => (a.id > b.id) ? 1: -1)
  }

}
