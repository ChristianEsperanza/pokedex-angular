import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

/**
 * Service that deals with talking to the PokeAPI and dealing with logic within 
 */
@Injectable({
  providedIn: 'root'
})

export class PokeapiService {
  private apiUrl = environment.apiUrl + 'pokemon';
  private _pokemons: any[] = []; // Holds the pokemon fetched from API to reduce calls
  private _next: string = '';

  constructor(private http: HttpClient) { }

  get pokemons(): any[] {
    return this._pokemons;
  }

  get next(): string {
    return this._next;
  }

  set next(next: string) {
    this._next = next;
  }

  // Make base API call, starting from the base if there has been no previous API calls
  getNext(): Observable<any> {
    const url = this._next === '' ? this.apiUrl + `?limit=20` : this._next;
    return this.http.get(url);
  }

  // Similar to getPokemonData but returns an observable 
  getDetails(name: string): Observable<any> {
    return this.http.get(this.apiUrl + `/${name}`);
  }










}
