import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon/';
  private limit: string = '?limit=151';
  private limit_test: string = '?limit=9';

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<any> {
    return this.http.get<any>(`${this.url}${this.limit}`);
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get<any>(url) 
  }
}
