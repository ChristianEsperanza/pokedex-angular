import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})

export class PokemonDetailsComponent {
  pokemon: any = null;
  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute, private pokeapiService: PokeapiService) { }

  // TODO: REWRITE!
  // On load, it should load the first pokemon (bulbasaur)
  // On click of a card in pokemon-list, pokemon-list should pass in params (possibly full pokemon details)
  // API calls are made after clicked
  // REFERENCE: interface-group/interface-groups
  set subscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  ngOnInit(): void {
    if (!this.pokemon) {
      this.pokemon = this.pokeapiService.pokemons[0]
    }

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription ? subscription.unsubscribe() : 0);
  }

}
