import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private apiUrl = environment.apiUrl + 'pokemon';

  constructor(
    private http: HttpClient
  ) { }

  getPokemon() {
    return this.http.get(this.apiUrl + `?limit=10`);
  }

  getPokemonData(name: string) {
    return this.http.get(this.apiUrl + `/${name}`)
  }

}
