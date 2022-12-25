import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private apiUrl = environment.apiUrl + 'pokemon';

  constructor(
    private http: HttpClient
  ) { }

  getPokemon(offset:number = 0) {
    return this.http.get(this.apiUrl + `?limit=20&offset=${offset}`);
  }

  getPokemonData(name: string) {
    return this.http.get<any>(this.apiUrl + `/${name}`)
  }

  // getPokemonDataObserveable(): Observable<any> {
  //   const url = this.next === '' ? `${this.apiUrl}?limit=100` : this.next;
  //   return this.http.get<any>(url);
  // }


}
