import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent implements OnInit {
  private _pokemons: any[] = [];

  constructor(
    private pokeapiService: PokeapiService
  ) { }

  ngOnInit(): void {
    this.pokeapiService.getPokemon()
      .subscribe((response: any) => {
        response.results.forEach((result: any) => {
          this.pokeapiService.getPokemonData(result.name)
            .subscribe((pokemonDataResponse: any) => {
              this._pokemons.push(pokemonDataResponse);
              console.log(this._pokemons);
            })
        });
      })
  }

}
