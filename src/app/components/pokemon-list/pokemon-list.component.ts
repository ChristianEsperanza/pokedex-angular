import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { concat, Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent implements OnInit {
  // pokemons: any[] = [];
  page = 1;
  totalPokemons: number = 0;
  subscriptions: Subscription[] = [];


  constructor(
    private pokeapiService: PokeapiService
  ) { }

  ngOnInit():void {
    if (!this.pokemons.length) {
      this.loadPokemon();
    }
  }

  // Unsubscribe to prevent memory leaks
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription ? subscription.unsubscribe() : 0);
  }

  // Get loaded pokemon from the service
  get pokemons(): any[] {
    return this.pokeapiService.pokemons;
  }

  set subscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  loadPokemon() {
    this.pokeapiService.getNext().subscribe((response: any) => {
        this.pokeapiService.next = response.next;
        const details = response.results.map((i: any) => this.pokeapiService.getDetails(i.name));
        this.subscription = concat(...details).subscribe((response: any) => {
          this.pokeapiService.pokemons.push(response);
        });
      }, error => console.log("Error Occurred: ", error))
  }

  // loadPokemon(lastId: number = 0){
  //   this.pokeapiService.getPokemon(lastId)
  //     .subscribe((response: any) => {
  //       this.totalPokemons = response.count;
  //       response.results.forEach((pkmn: any) => {
  //         this.pokeapiService.getPokemonData(pkmn.name)
  //           .subscribe((pokemonDataResponse: any) => {
  //             this.pokemons.push(pokemonDataResponse)
  //           })
  //       });
  //     })
  //     console.log(this.pokemons)
  // }


}
